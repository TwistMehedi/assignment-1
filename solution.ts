// problem number - 1

const formatValue = <T extends string | number | boolean>(value: T): string | number | boolean => {

    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    };

    return value;
};

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

// problem number - 2

const getLength = (value: string | any[]): number =>{

    if(typeof value === "string"){
        return value.length
    }else if(Array.isArray(value)){
        return value.length
    }

    return 0;
};

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

// problem number - 3

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    };

    getDetails(): string {
        const personDetails = `Name: ${this.name}, Age: ${this.age}`;
        return personDetails;
    }

};

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

 