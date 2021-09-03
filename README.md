# 路由权限控制器

结合vue-router快速构建起一套权限路由，并提供一系列快捷方法可以快速的查询节点权限。

## 快速开始

```javascript
import Vue from 'vue';
import AccessRoute from 'access-route-plugin'

Vue.use(AccessRoute);

const {access, route} = new AccessRoute(
  routeOptions, // 路由配置
);

new Vue({
  el: '#app',
  route,
  access,
  // ...其他初始化必要的配置
});
```

## 路由配置
配置与 vue-router 配置类似，只是每个路由节点相应的增加一个 access 属性，用于该路由的权限判断，与权限节点标识一一对应。

## 权限设置
权限节点设置
```javascript
const {access, route} = new AccessRoute(
  routeOptions, // 路由配置
);

access.init(callback);

```