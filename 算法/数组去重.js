Array.prototype.myUnique = function(){
	var obj = {}
	for(var i=0;i<this.length;i++){
		var cur = this[i]
		if(obj[cur] == cur){
			
			//就最后一个移到当前已经重复的位置并将最后一个删除 此方法打乱了数组原顺序
			this[i] = this[this.length-1];
			this.length--;
			i--
			continue;
		}
		obj[cur] = cur;
	}
	obj = null
	return this;//把去重后的数组返回就可以实现链式写法
}
Array.prototype.myUnique2 = function(){
	var obj = {};
	for(let i=0; i<this.length; i++){
		var cur = this[i];
		if(obj[cur] == cur){
			this[i] = this[i+1];
			this.splice(i,1);
			i--;
		}
		obj[cur] = cur;
	}
	obj = null;
	return this;
}
var arg = [1,2,26,4,6,26,2,6,26,0,62,63,0,"false","a","b","a"]

console.log(arg);