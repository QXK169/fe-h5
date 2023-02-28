export default {
  name: 'fe-H5',
  build: {
    css: {
      base: 'style/index.css',
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/',
    },
  },
  site: {
    title: 'fe-H5',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'gw-button',
            title: 'gw按钮',
          },
          {
            path: 'gw-navBar',
            title: '标题栏',
          },
        ],
      },
    ],
  },
};
