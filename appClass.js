class Person {
    constructor(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    greeting() {
      console.log(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
  }

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();
// Leia has left the building. Bye for now

// super(); calls the parent constructor 
class Teacher extends Person {
    constructor(subject, grade) {
        super(first, last, age, gender, interests); // Now `this` is initialized by calling the parent constructor. and inherits parent properties 
        this._subject = subject;
        this.grade = grade; 
    }
    get subject() {
        return this._subject;
    }
    set subject(newSubject) {
        this._subject = newSubject; 
    }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
