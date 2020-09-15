## react-template

### 1.less 样式配置，及全局样式配置

    路径 /config/webpack.config.js
    less样式配置，安装less和less-loader;参照css和sass样式，仿写即可
    全局样式配置
    const commonstyles = {
      loader: 'style-resources-loader',
      options: {
        patterns: path.resolve(__dirname, '../src/assets/styles/*.less')
      }
    }

### 2.@代替 src 路径

    /jsconfig.json 配置代码
    /config/webpack.config.js中修改以下配置
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }

### 3.prettierrc 代码规范化文件

### 4.AES 添加了 url-search 传参加密

    @/pages/Home中 url-search按钮跳转页面，aes加密传参

### 5.url-search 传参及使用的公共方法

    在工具@/utils/index.js中;
    objectToSearch() 包装参数并加密； getSearchObject 获取url-search中参数并解密
    上述两方法，输入输出均为Object形式

### 6.随机数公共方法

    在工具@/utils/index.js中;

### 7.公共 get post 方法

    @/utils/axios ，使用方法见 @/api/test.js

### 8.@/api/test.js 测试接口，使用了数据聚合的免费天气接口

    顺便一提，数据聚合的get\post请求方法，只是请求方法换，数据类型依然是拼接在url后

### 9.@/setupProxy 接口代理设置，支持跨域（前提：目标网站支持跨域访问）

### 10.setupProxy 的引入路径在/config/path.js 修改

### 11.miment

    @/utils/miment; github地址: https://github.com/noahlam/Miment
    轻量级时间插件,具体使用在@/utils/now-date和@/pages/DateSelect
