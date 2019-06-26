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
