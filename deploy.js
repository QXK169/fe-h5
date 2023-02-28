const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const axios = require('axios');
const FormData = require('form-data');
const crypto = require('crypto');

const filePath = path.resolve(__dirname, './site-dist/');
const zipPath = path.resolve(__dirname, './dist.zip');
// eslint-disable-next-line no-use-before-define
deploy();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sendDingMsg() {
  const accessToken =
    'd1338dc074aedf2612b2be5678c10f50ec50c7bbd033cc75778592618f531874';
  const secret =
    'SEC2bacc60c7360412aeec1e1cbb9f231f8b28e9321706421d4b94e7456367713d5';
  const baseUrl = 'https://oapi.dingtalk.com/robot/send';
  const param = {
    msgtype: 'markdown',
    markdown: {
      title: '前端H5组件发版啦',
      text: "<font color='#FFA500'>前端H5组件发版啦~ </font>\n\n --- \n\n <font color='#778899' size=2>项目名称：前端H5组件fe-H5</font> \n\n <font color='#708090' size=2>项目地址：[SL API平台](http://10.0.5.165/login)</font> \n\n <font color='#708090' size=2>开发分支：feature-v1.0</font>",
    },
  };
  // 加签
  function signFn(secrets, content) {
    const str = crypto
      .createHmac('sha256', secrets)
      .update(content)
      .digest()
      .toString('base64');
    return encodeURIComponent(str);
  }
  const timestamp = new Date().getTime();
  const sign = signFn(secret, `${timestamp}\n${secret}`);
  const webhookUrl = `${baseUrl}?access_token=${accessToken}&timestamp=${timestamp}&sign=${sign}`;
  const webHookConfig = {
    method: 'post',
    url: webhookUrl,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    data: param,
  };
  axios(webHookConfig)
    .then((response) => {
      console.log(webhookUrl, response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deploy() {
  const output = fs.createWriteStream(zipPath); // 设置一下输出流
  const archive = archiver('zip', {
    zlib: {
      level: 9, // 这个配置是配置压缩等级，我没具体研究，直接使用了9
    },
  });
  archive.directory(filePath, false);
  archive.pipe(output);
  output.on('close', () => {
    console.log('压缩完成', archive.pointer() / 1024 / 1024 + 'M');
    // eslint-disable-next-line no-use-before-define
    postZip();
  });
  archive.on('error', (err) => {
    throw err;
  });
  archive.finalize();
}

function postZip() {
  const form = new FormData();
  form.append(
    'file',
    fs.createReadStream(path.resolve(__dirname, './dist.zip'))
  );
  axios
    .post('http://gwmui.jqliu.com/api/file/uploadFile', form, {})
    .then((res) => {
      console.log('==>部署成功', res.data);
      //   sendDingMsg()
    })
    .catch((err) => {
      console.log('err', err);
    }).finally(() => {
        fs.unlink(
            path.resolve(__dirname, './dist.zip'),
            (err) => {
                if (err) {
                    return;
                }
                console.log("\n删除成功\n");
            }
        );
    })
}
