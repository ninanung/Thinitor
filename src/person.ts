class Person {
    name: string;
    age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    whatIsYourName() {
        return this.name;
    }

    howOldAreYou() {
        return this.age;
    }
}

export default Person