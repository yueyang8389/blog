---
title: yamljs转换yml为json
date: 2020-4-8
tags:
  - 工具
category: 前端
banner: /blog/img/banner/59.jpeg
---

# yamljs转换yml为json

## 安装
```ssh
$ yarn add yamljs
```

## 使用
```js
import YAML from 'yamljs';
import data from 'data.yml';

const json = YAML.load(data);
```

## 其他
```js
// parse YAML string
nativeObject = YAML.parse(yamlString);
 
// Generate YAML
yamlString = YAML.stringify(nativeObject, 4);
```