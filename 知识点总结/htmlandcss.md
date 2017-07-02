#### img 标签 alt与title区别
- title 鼠标悬停时候的提示
- alt 图片不能正常显示的时候提示 便于SEO优化 搜索引擎抓取 一般必须
#### form表单
- form标签有*action*属性 用来存表单提交的服务器地址
##### input属性
- required
- placeholder
- name 单选复选用
- checked 默认选中
###### input的type属性值
- text
- radio 单选框(外面套label标签) 此时input加name属性 且所以单选框的name值都相同
```
<label><input type="radio" name="indoor-outdoor checked"> Indoor</label>
<label><input type="radio" name="indoor-outdoor"> Outdoor</label>
```
- checkout 复选框(外面套label标签) 此时input加name属性 且所以单选框的name值都相同
```
<label><input type="checkbox" name="personality checked"> Loving</label>
<label><input type="checkbox" name="personality"> Lazy</label>
<label><input type="checkbox" name="personality"> Energetic</label>
```
##### button
- type类型：submit
#### margin
- margin 负值
- margin 上下吃进 大吃小
- margin 儿子margin-top值跑到父亲外面 避免 => 给父亲设置over-flow:hidden 属性
#### css样式权重
- !important
```
color: pink !important;
```
#### CSS颜色表示 16进制 rgb颜色表示
- 16进制从小到大 0-9 A B C D E F(0最小 F最大最亮 #000 #fff #f00 #0f0 #00f)
- rgb(0, 0, 0) rgb(255, 255, 255) rgb(255, 0, 0)
#### Bootstrap知识
- 最外层div class="container-fluid"
- 图片自适应 class="img-responsive"
- 文字居中 class="text-center"
- button样式 class="btn btn-block btn-primary" class="btn-info btn-danger"
- 栅格布局 row 下包含 col-md-* col-xs-*
