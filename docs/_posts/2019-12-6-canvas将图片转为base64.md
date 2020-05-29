---
title: canvas将图片转为base64
date: 2019-12-06
tags:
  - Canvas
  - Js
category: 前端
banner: /blog/img/banner/48.jpg
---

## html
```html
<img src="" alt="" id="image"/>
```

## js
```js
 function getBase64Image(img) {
   var canvas = document.createElement("canvas");
   canvas.width = img.width;
   canvas.height = img.height;

   var ctx = canvas.getContext("2d");
   ctx.drawImage(img, 0, 0, img.width, img.height);

   var dataURL = canvas.toDataURL("image/png");
   return dataURL

   // return dataURL.replace("data:image/png;base64,", "");
 }

function main() {
  var img = new Image();
  img.setAttribute("crossOrigin",'anonymous'); // 设置图片跨域
  img.src = 'https://yixiu1043.top/assets/img/me.b23067c1.jpg';
  img.onload =function() {
    var dataURL = getBase64Image(img);
    console.log(dataURL);
    document.getElementById("image").src = dataURL;
  }
}

main()
```

> 本地的图片没有成功，不知道为什么