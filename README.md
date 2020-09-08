# Tomotoes-HomePage


[![支付宝赞助按钮](https://camo.githubusercontent.com/f4874996db5ac421925db08778d800d76d36abbc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545362539342541462545342542422539382545352541452539442d25453525393025393154412545362538442539302545352538412541392d677265656e2e737667)](https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/alipay.png)

[![微信赞助按钮](https://camo.githubusercontent.com/26101aa838286ad0d45a6f71b25fdc6e14e7668c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545352542452541452545342542462541312d25453525393025393154412545362538442539302545352538412541392d677265656e2e737667)](https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/wechat.png)

[中文版说明](<README.zh_CN.md>)



## Introduction

> `一个坏掉的番茄`  home page.

[Online browsing](http://tomotoes.com)

Do you want to install such a cool homepage for your website?

Let's start now!



## Prerequisites

- Nodejs 6.0 above
- Git available



## Install

```sh
git clone https://github.com/Tomotoes/HomePage.git
cd HomePage
npm install
npm run dev
```



## Features

1. Highly encapsulates all the information in the page
2. Use [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/) as background
3. Use `scss` as `css` preprocessor
4. Use `pug` as `html` preprocessor
5. Use `gulp` as a build tool and configure the build script
6. Comfortable animation and beautiful UI
7. Responsive, mobile support
8. The referenced `css` and`js` files do not exceed `18.5` kb in total!
9. Delayed response switch page event
10. There are many features left for you to explore...



## Structure

According to the characteristics of the project, it is divided into two categories：
1. `intro` First screen
2. `main` Secondary screen

The corresponding functions, styles and configurations are also based on this standard.



## Basic configuration

Each key name in the config.json file`config.json` corresponds to the corresponding component name.

such as：

```json
{
	"head": {
		"title": "一个坏掉的番茄",
		"description": "Author:SimonMa,Category:Personal Blog",
		"favicon": "favicon.ico"
	}
}

```
The above configuration information corresponds to the information in the following `layout/head.pug` component.
```html
head
	title #{head.title}
	meta(charset="utf-8")
	meta(name="Description" content=`${head.description}`)
	link(rel="icon" href=`${head.favicon}` type="image/x-icon")
```



## Advanced configuration

### WebGL-Fluid-Simulation

Use [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/) as background at home.

If you want to turn it off, set `intro.background: false`.

### supportAuthor

The `supportAuthor` option is turned on by default for configuration information, that is, authors are supported.

All support items are as follows：

1. The `octopus cat` will be displayed in the upper right corner of the home page.
2. The console prints the author's site information

If you want to turn it off, set `intro.author: false`.


### Icon replacement
Icons in the project, all from [阿里巴巴矢量图标库](https://www.iconfont.cn)

The replacement steps are as follows:

1. Please select your icon, add it to the project, and change the color to white.
2. Click Font Class method
3. Copy the contents of the generated link
4. Replace the contents of the file `/src/css/common/icon.scss`, where the contents of the `icon` selector must be preserved.
5. Config.json the corresponding item in the `config.json`file`main.ul. * .icon`

```css
.icon {
	display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
	font-family: 'iconfont' !important;
	font-size: inherit;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
```



## Deployment

After executing `npm run build` under the root directory, the project file will be generated to the `dist` directory.

You can then deploy the dist directory to your favorite server hosting provider.

The following is an example of `GithubPage`:

1. create `userName.github.io` Repo

2. ```sh
   cd dist
   git init 
   git add -A
   git commit -am"init"
   git remote add origin https://github.com/userName/userName.github.io.git
   git push -f origin master
   ```

3. Then set the repo's Github Page option in GitHub.

4. Visit `username.github.io` to browse!

   

If your previous `username. github.io` repo already has content, you can create another repo, such as `blog`.

 Then migrate the occupied items to `blog` and set the `GithubPage` option for this repo.

 The repo became a subdirectory of `username. github.io/blog`.

 In this way, your `username. github.io` repo can be left to the home page!



## Sponsor
I spent a lot of time and energy to develop this project.

If this project has brought you help, welcome to sponsor, `star`.

Thank you!



## License
The Project is released under the ` LGPL-3.0` license.
