dom.js是一个轻量级DOM操作插件
====

## hide

隐藏元素

```javascript
$('#app').hide()
```

## show

展示元素

```javascript
$('#app').show()
```

## insert

相对当前元素，插入元素（beforebegin：元素前，afterbegin：元素内第一节点，beforeend：元素后，afterend：元素内最后节点）

```javascript
$('#app').insert('beforebegin/afterbegin/beforeend/afterend','<div>app</div>')
```

## addClass

为元素增加css类

```javascript
$('#app').addClass('active')
```

## removeClass

为元素移除css类

```javascript
$('#app').removeClass('active')
```

## css

改变元素的css样式或获取元素的样式

```javascript
$('#app').css('color',"#000")
var color=$('#app').css('color')
```

## attr

获取元素的属性或设置元素的属性

```javascript
$('#app').attr('name',"0")
var name=$('#app').attr('name')
```

## parent

获取元素的父级元素

```javascript
var parent=$('#app').parent()
```

## siblings

获取元素的同级其他元素

```javascript
var siblings=$('#app').siblings('div')
```
