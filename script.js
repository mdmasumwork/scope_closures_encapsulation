// Exercise 1
String.prototype.filter = function(bannedWords) {
    return this.split(' ').filter(word => !bannedWords.includes(word)).join(' ');
};

console.log("This house is not nice!".filter(['not'])); // Output: "This house is nice!"

// Exercise 2
Array.prototype.bubbleSort = function() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
    return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort()); // Output: [-2, 0, 1, 3, 4, 6]

// Exercise 3
function Person(name) {
    this.name = name;
}

function Teacher(name) {
    Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};

const teacher1 = new Teacher("John");
teacher1.teach("Mathematics"); // Output: "John is now teaching Mathematics"

// Using Object.create
const teacherProto = {
    teach(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
};

function createTeacher(name) {
    const teacher = Object.create(teacherProto);
    teacher.name = name;
    return teacher;
}

const teacher2 = createTeacher("Jane");
teacher2.teach("Physics"); // Output: "Jane is now teaching Physics"

// Exercise 4
// Using prototype approach
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function() {
    console.log(`Good morning!, and in case I don't see you, good afternoon, good evening and good night!`);
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greet = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const student1 = new Student("Alice", 20, "Computer Science");
student1.greet(); // Output: "Hey, my name is Alice and I am studying Computer Science."
student1.salute(); // Output: "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"

const professor1 = new Professor("Dr. Smith", 45, "Physics");
professor1.greet(); // Output: "Good day, my name is Dr. Smith and I am in the Physics department."
professor1.salute(); // Output: "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"

// Using constructor approach
class PersonC {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    }
    salute() {
        console.log(`Good morning!, and in case I don't see you, good afternoon, good evening and good night!`);
    }
}

class StudentC extends PersonC {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    greet() {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    }
}

class ProfessorC extends PersonC {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    greet() {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    }
}

const student2 = new StudentC("Bob", 22, "Mathematics");
student2.greet(); // Output: "Hey, my name is Bob and I am studying Mathematics."
student2.salute(); // Output: "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"

const professor2 = new ProfessorC("Dr. Brown", 50, "Chemistry");
professor2.greet(); // Output: "Good day, my name is Dr. Brown and I am in the Chemistry department."
professor2.salute(); // Output: "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"
