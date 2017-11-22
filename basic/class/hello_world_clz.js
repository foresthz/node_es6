class HelloWorld {
    sayHello() {
        console.info('Hello from HelloWorld');
    }
}

class Animal extends HelloWorld{
    sayHello() {
        console.info('---------- Animal');
        super.sayHello();
        console.info('call upper level Hello First, now Hello From Animal')
    }
}

class Cat extends Animal {
    sayHello() {
        console.info('-------------Cat');
        super.sayHello();
        console.info('Hello from Cat')
    }
}

hello = new HelloWorld()
animal = new Animal()
cat = new Cat()
hello.sayHello()
animal.sayHello()
cat.sayHello()