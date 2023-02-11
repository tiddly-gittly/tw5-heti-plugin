![](src/doc/banner.png)

# TW5-heti 赫蹏（hètí）

专为中文内容展示设计的排版样式增强。它基于通行的中文排版规范而来，可以为网站的读者带来更好的文章阅读体验。

![image](https://user-images.githubusercontent.com/32425955/218240521-d489e306-2387-4d41-9b22-6859b2ade1e0.png)


## Document & Usage
heti官网使用说明：https://sivan.github.io/heti/

1. 在页面的</head>标签前中引入heti.css样式文件：

```html
<link rel="stylesheet" href="//unpkg.com/heti/umd/heti.min.css">
```

2. 在要作用的容器元素上增加class="heti"的类名即可：

```html
<article class="entry heti">
  <h1>我的世界观</h1>
  <p>有钱人的生活就是这么朴实无华，且枯燥。</p>
  ……
</article>
```

注：赫蹏是正文区域的样式增强。因此不建议将它作用在根标签（如`<body>`或`<div class="container">`）上。


## Credits

This project is based on [赫蹏（hètí）](https://github.com/sivan/heti)

 ```
  "author": "Sivan <sun.sivan@gmail.com>",
  "homepage": "https://github.com/sivan/heti#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sivan/heti.git"
  },
```


## Development

开发环境依赖：[Modern.TiddlyDev](https://tiddly-gittly.github.io/Modern.TiddlyDev/)

```
1. npm i
2. npm run build-heti
3. npm run dev
```

运行npm run dev命令时，修改src/heti文件夹中的非meta文件会触发自动编译与更新

## Contributors

- [白秋](https://github.com/Zacharia2)
- [dongrentianyu](https://github.com/dongrentianyu/WENAI)
