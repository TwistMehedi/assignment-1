

const formatValue = <T extends string | number | boolean>(value: T): string | number | boolean => {

    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    }else{
      throw new Error('Invalid type');
    }
    
};


const getLength = (value: string | any[]) => {

    if (typeof value === "string") {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    }else{
        throw new Error('Invalid type')
    }
    
};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    getDetails(): string {
        const personDetails = `'Name: ${this.name}, Age: ${this.age}'`;
        return personDetails;
    }

};

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);
 

interface Books {
    title: string;
    rating: number
};

const filterByRating = (books: Books[]): Books[] => {

    const retingUpperFour = books.filter((book) => {
        if (book.rating >= 4) {
            return book;
        }else{
            throw new Error("Ratting not found your requirement")
        }
    });

    return retingUpperFour;
};

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
 

interface Users {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: Users[]): Users[] => {
    const activeUsers = users.filter((user) => {
        if (user.isActive) {
            return user
        }else{
            throw new Error("Not have active user now try tot latter")
        }
    });

    return activeUsers;
};

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
 

interface Book {
    title: string;
    author: string
    publishedYear: number
    isAvailable: boolean
};

const printBookDetails = (book: Book) => {

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
};

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

 
const getUniqueValues = <T extends string | number>(array1: T[], array2: T[]): T[] => {

    let margeArray: T[] = [];
    let uniqueNumber: T[] = [];

    for (let i = 0; i < array1.length; i++) {
        margeArray[margeArray.length] = array1[i];
    };

    for (let i = 0; i < array2.length; i++) {
        margeArray[margeArray.length] = array2[i]
    };

    for (let i = 0; i < margeArray.length; i++) {

        let checkUnique = false;

        for (let j = 0; j < uniqueNumber.length; j++) {
            if (margeArray[i] === uniqueNumber[j]) {
                checkUnique = true;
                break;
            }
        }

        if (!checkUnique) {
            uniqueNumber[uniqueNumber.length] = margeArray[i];
        }
    };

    return uniqueNumber;

};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
 

interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {

    const productPrice = products.map((product) => {
        let totalPrice = product.price * product.quantity;
 
        if(product.discount){
            const discountAmount = (totalPrice * product.discount!) / 100;
             totalPrice -= discountAmount;
        };

         return totalPrice;
    });

    const finalPrice = productPrice.reduce((accumulator, currentValue) => {
        const total = accumulator + currentValue;
        return total;
    }, 0);

    return finalPrice;

};


const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];