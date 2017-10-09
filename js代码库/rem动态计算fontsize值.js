//根据当前屏幕的宽度和设计稿宽度的比例 动态计算下当前的fontsize值 如果这个值改变了 之前设定的rem的值会自动跟着改变
// 如果当前屏幕的宽度大于设计稿以设计稿为主防止图片变形；解决办法
//1. 判断当大于的时候给最外层的main盒子加样式 让他宽度固定且水平居中(京东)
//2. 判断当前游览器是PC还是移动端,PC访问移动端直接跳到PC页面，移动端访问PC直接跳到移动端(qq看比赛)
//跳转:window.location.href = "你要跳到的地址"
var desW = 640;
var winW = document.documentElement.clientWidth;
var ratio = winW / desW;
var oMain = document.getElementById('main');//做项目最外层一般套个盒子
if (winW > desW) {
  oMain.style.width = desW + "px";
  oMain.style.margin = "0 auto";
  return;
}
document.documentElement.style.fontSize = ratio * 100 + "px";
