# Travel

> 仿去哪网

## 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 学到的知识
1. 图片在加载完后触发页面抖动，因为图片的高度默认为0

    为图片设置默认高度为宽度的 31.25%
    ```css
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    ```
2. 使用 computed 来实现 icons 页面的翻页
    ```javascript
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
    ```
3. 获取数据时应该在父组件中统一获取数据,不要在子组件中获取，减少 http 请求
4. 轮播展示时，使用 computed 判断数据不为空时进行渲染，否则会默认显示最后一张图片
5. 使用 mock 做模拟数据，在 devserver 中配置 proxyTable 做接口转发，提高开发效率
6. 使用 better-scroll 插件模拟类似微信好友滚动列表，记得添加 overflow: hidden
7. 简单的组件通信，可以通过父组件来实现，接收数据的子组件通过 watch 监听接收数据变化
8. 可以把经常操作且不变的数据，放到 update 中，避免重复创建，对手指事件使用节流
9. 使用 vuex 做组件之间数据的传递，使用 localStorage 做本地存储，记得要处理异常，解决浏览器兼容问题
10. 在 router-view 外面添加 keep-alive 页面只会在第一次进入发 http 请求，如果想要重新请求要在生命周期 activated 中重新发送请求
11. 使用 v-show 切换轮播时，由于 DOM 发生了改变 swiper 会出现问题

    解决：使用observeParents: true, observer: true让 swiper 在DOM改变时自动刷新
12. 如果在组件中绑定事件，在组件移除时一定要及时进行事件解绑，避免造成全局的影响

    如果使用了 keep-alive 在 activated 进行事件绑定，那就在 deactivated 进行事件解绑
13. 使用 keepalive 后，如果不想使用缓存可以设置 keep-alive exclude="Detail" 这样 Detail 页面就不会进行缓存了
14. 组件之间的滚动会相互影响，需要在路由中配置每次打开都是起始位置
    ```javascript
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
    ```
15. babel-polyfill 可以解决浏览器不支持 ES6 新特性的问题
16. router 使用 component: () => import('@/page/home/Home') 按需加载提高首屏速度，同理，组件也可以使用按需加载
    
    **注**:如过打包后的页面很小，不需要按需加载，因为多发一个http请求会比多加载一个 js 还要慢
17. 跨域配置 config 中的 index.js
    ```javascript
    proxyTable: {
      '/api': { // 转发 /api 的接口 
        target: 'http://localhost:8080', // 设置域名
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '/static/mock' // 设置转发路径，将/api转为/static/mock
        }
      }
    } 
    ```
    
    
   
