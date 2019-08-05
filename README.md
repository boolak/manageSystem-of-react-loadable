## 基于官方脚手架create-react-app，增加了一些必要的库，以及主要的目录结构的设计

### 开发环境
node: v6.x.x
webpack: v3.x.x
eslint: v4.x.x
react: v16.x.x
react-router: v4.x.x
isomorphic-fetch: v2.x.x

### 目录结构（只针对有修改的部分进行说明，其余配置为默认生成文件）
```
config                                // 默认生成的目录
    |-webpack.config.dev.js           // 只增加了sass和postcss-px-to-viewport (css单位转换插件)
    |-webpack.config.prod.js          // 同上
build                                 // 代码编译后生成的临时目录
public                                // 默认生成的目录
scripts                               // 默认生成的目录
src                                   // 项目源码目录
    |-components                      // 与业务无关的公用组件目录，如封装的echarts等
    |-constants                       // 常量目录
        |-enum.js                     // 存放一些通用常量
    |-containers                      // 业务功能组件目录
        |-frame                       // 页面框架组件
            |-images                  // 组件内所使用的图片
            |-context.js              // 组件内的全局数据，使用react v16提供的context API
            |-index.js                // 组件入口文件，即是高阶函数，用于组件的行为与展示的完全解耦
            |-model.js                // 组织组件的数据与行为逻辑
            |-service.js              // 请求接口的函数
            |-view.js                 // 展示组件，尽量使用纯函数组件
            |-style.scss              // 组件的样式文件
        |-header
            |-index.js                // 不同于frame组件的完全解耦方式，而直接将入口文件作为model
            |-header.js               // 展示组件也可以用组件名命名
    |-fonts                           // 字体文件目录
    |-styles                          // 存放公用样式，以及重置第三方UI库的样式
    |-utils                           // 工具库方法
        |-fetch.js                    // 浏览器的接口请求方法的封装，此处使用fetch
    |-index.js                        // 项目入口文件
    |-Router.js                       // 入口路由
.eslintignore                         // eslint忽略校验配置文件
.gitignore                            // git忽略提交配置文件
package.json                          // npm配置文件
README.md                             // 项目说明文档
```

### 环境配置
1. 开发环境：node-v6.x.x以上版本.
2. 安装项目依赖包
3. 创建组件文件 双击/makeFile.bat, 然后输入组件名
```
npm install
```

### 运行项目
```
npm run start
```
### 项目打包
```
npm run build
```