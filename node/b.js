var b = require("./a.js");


console.log(b);
console.log(module.exports === exports)
console.log(this === module.exports);
console.log(this === exports);

console.log(__dirname);

const initState = '';
const actions = ['a', 'b', 'c'];
// 传入当前的 state 和 action ，返回新的 state
const newState = actions.reduce((curState, action,index,array) => {
	console.log(curState,action,index,array);
	return curState + action
});
console.log( newState );