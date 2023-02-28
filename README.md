### 介绍

app-component-lib 是一个**公司内部的移动端业务组件库**。

## 安装

在现有项目中使用 Vant 时，可以通过 `npm` 进行安装：

```bash
# Vue 3 项目，安装最新版 Vant
npm i app-component-lib

当然，你也可以通过 `yarn` 或 `pnpm` 进行安装：

```bash
# 通过 yarn 安装
yarn add app-component-lib

# 通过 pnpm 安装
pnpm add app-component-lib
```

## 快速上手

```js
import { createApp } from 'vue';
// 1. 引入你需要的组件
import { Button } from 'app-component-lib';

const app = createApp();

// 3. 注册你需要的组件
app.use(Button);
```

## 浏览器支持

Vapp-component-libant 3/4 支持现代浏览器以及 Chrome >= 51、iOS >= 10.0（与 Vue 3 一致）。