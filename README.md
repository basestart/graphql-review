# graphql-review
practice before application

### 这是什么

- graphql的学习轨迹以及总结

- 一个文章管理系统
  - 前端技术栈为react+redux+redux-actions+react-redux
  - 后端为koa
  - 提供前后端的graphql支持
  - ui使用antd
  - 数据库为mysql

### 为什么要创建这个项目

#### 业务需要

- GraphQL是一个用于API的查询语言， 是一个使用基于类型系统来执行查询的服务端运行时， GraphQL对API中的数据提供了一套易于理解的完整描述， 使得客户端能能够准确底获得需要的数据， 而且没有任何冗余， 让API更容易随着时间推移而演进。
  - 通俗地讲： 之前我们调用接口是前后端先协商好， 我们有哪些接口， 约定好接 口传递参数的结构以及返回的数据结构。这样看起来前后端分离， 约定规范统一。
  - 但实际的工作场景很可能是这样的： 小**， 领导发话了， 我们要做这个， 做那个， 那个还要改， 改吧。
  - 如果碰上后端不配合， 那只能跪着自己调多个接口， 异步异步再异步，注册缓存object， 无比的坑啊。
  - 那好吧， 我们自己在中间加一个层， 你不给我接口， 我自己调， 然后转发行了吧， 但是这个会遇到一个问题， 这个工作量有点大啊，而且一旦接口变动，中夹层还要跟着改啊。如果能有一个工具可以把满足按需返回同时又能代理转发原有api， 那就完美了。 
  - 这个工具就是graphql。

- 请求所需要的数据， 不多不少
  - GraphQL查询总是返回需要的数据， 因为是应用控制数据， 而不是服务器

- 获取多个资源， 只需要一个请求
  - 在实际业务场景中， 基于restful规范的api往往需要调用不止一次， 特别是当需求不断变动时， 请求数据， 处理数据占据了绝大部分的工作时间
  - GraphQL只需要一次请求就可以获取数据

- 描述所有的可能类型系统
  - GraphQL 的 API 基于类型和字段的方式进行组织， 而不是入口端点。

我们的项目现在遇到了什么问题以及我们为什么需要它

- 需求经常变动， 部分需求变动非常大， 但后端数据结构相对稳定， 一旦确定，变动就很小
 
  - 我们需要一个能代理api请求， 缓存数据， 灵活响应的工具

- 为了保证后端数据结构的稳定（大白话： 后端根本不care我们的诉求）， 接口的数据结构往往比较复杂， 绝大多数的接口返回的数据是不必要或者无用的

  - 我们需要一个能按需返回数据的工具

- 因为数据结构复杂且变动小， 想要适应日益增长的领导需求变动， 只能通过多次调用不同的接口， 然后进行组合， 计算， 过滤等数据操作， 获取需要的数据

  - 我们需要一个一次返回所有需要数据工具

- 因为任务多， 人员少， 代码不规范， 数据类型控制更是基本没有， 碰上多级关联流程， 弱类型就是一个天大的坑， 而graphql的请求要求必须做数据类型校验

  - 我们需要一个能对请求和响应做数据类型限制的工具

综上看， 即便graphql不是银弹， 但它的确符合我们现阶段业务开发的需求， 所以想通过此项目完成学习并掌握graphql工具集， 然后小规模应用到项目中去，如果反馈不错的话， 对所有api进行代理。

#### 为了学习koa， graphql

### 项目流程

- 搭建前后端开发框架， 配置数据库
 - 完善脚手架， 使用脚手架创建后台
 - create-react-app 创建前端blog展示结构
- 数据库设计
 - mysql
- 界面设计
 - 
- graphql支持


#### 网络资源

- [graphql入门](https://www.cnblogs.com/Wolfmanlq/p/9094418.html)

- [基于koa的graphql实践](https://segmentfault.com/a/1190000012720317)

- [Node.js 服务端实践之 GraphQL 初探](http://taobaofed.org/blog/2015/11/26/graphql-basics-server-implementation/)
