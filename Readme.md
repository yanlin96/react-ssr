1. React 中的虚拟 dom
   虚拟 dom 是真是 dom 的一个 javascript 对象的映射
   ```js
   //这个代码就是把虚拟dom转化为实际的dom
   ReactDom.render(<App>,)
   ```
2. 本节课的同构概念
   一套 React 代码，服务器端执行一次，客户端再次执行一次
   整个流程
   a. 服务器端运行 react 代码，渲染出 html
   b. 发送 HTML 给浏览器
   c. 浏览器接受到内容展示
   d. 浏览器加载 js 文件
   e. js 中的代码在浏览器中运行
   f. js 中的代码接管界面操作（具体体现在，dom 事件的生效）

3. 5-7 节课的笔记
   a. 服务器接收到请求，store 为空
   b. 服务器端不会执行 componetDidMount
   c. 客户端运行，store 依然是空
   d. 客户端执行 componentDidMount 函数，列表数据更新
   e. store 的数据更新
   f. 客户端渲染出 store 中 list
