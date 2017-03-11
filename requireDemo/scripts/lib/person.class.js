define(function(){
	class Person {
		constructor(name,age){
			this.name=name;
			this.age=age;
		}
		say(){
			console.log("I`m ",this.name,", I`m ",this.age," years old")
		}
	}
	return Person;
})
