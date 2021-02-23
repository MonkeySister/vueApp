//全局cli配置
module.exports = {
    /* //部署应用包时的基本url，默认应用部署在一个域名的根路径上，
    如果部署在子路径上就需要指定这个子路径，eg:'/my-web/',这个值也可以被设置成''，或者相对路径'./',
    这样打出来的包可以被部署在任意路径。
    1. 当使用H5的history模式时不能使用相对路径
    2. 当使用pages选项构建多页面应用时不能使用相对路径 */
    publicPath: '/',
    /* 打包文件夹名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源(js,css,img,fonts)的目录，相对outputDir */
    assetsDir: '',
    /* 指定生成index.html的输出路径，也可以是一个绝对路径，相对于dist */
    indexPath: 'index.html',
    /*  默认情况下，生成静态资源在它们的文件名中包含了hash以便更好的控制缓存，
    然而这也要求index的HTML是被cli自动生成的，如果你无法使用cli生成的index html，
    可以通过将这个选项设置成false来关闭文件名哈希*/
    filenameHashing: true,

    /* 是否在开发环境下通过eslint-loader在背刺保存时lint代码，这个值会在@vue/cli-plugin-eslint安装后生效
    设置为一下值
    1. true/warning,esling-loader将错误输出为编译警告，编译不会失败
    2.defalut:将lint错误显示在浏览器中，
    3.default：将lint错误输出为编译错误，导致编译失败
    4.error:lint将警告也输出为编译错误，警告会导致编译失败 */
    lintOnSave: true,
    /* 是否使用包含晕死时的编译器的Vue构建版本 */
    runtimeCompiler: false,
    /* babel显示转译一个依赖 */
    transpileDependencies: [],
    /*生产环境的 source map,
     map文件的作用在于：项目打包后，
    代码都是经过压缩加密的，如果运行时报错，
    输出的错误信息无法准确得知是哪里的代码报错。
    也就是说map文件相当于是查看源码的一个东西。如果不需要定位问题，
    并且不想被看到源码，就把productionSourceMap 置为false，
    既可以减少包大小，也可以加密源码 */
    productionSourceMap: false,
    /* 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性 */
    crossorigin: '',
    integrity: false,
    /* webpack简单的配置，可以是对象也可以是函数 */
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production'
            config.externals = {
                // cdn引入到index.html后在这里配置免于打包相应的插件
                // 'vue': 'Vue',
            }
        } else {
            config.mode = 'development'
        }
    },
    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: () => {},
    css: {
        requireModuleExtension: true,
        extract: false, //是否单独提取css文件
        sourceMap: false, //是否打包css map 文件
        // loaderOptions: {
        //     css: {
        //         // 这里的选项会传递给 css-loader
        //     },
        //     postcss: {
        //         // 这里的选项会传递给 postcss-loader
        //     }
        // },
        modules: false
    },
    devServer: {
        // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
        // props: ''
    }

}