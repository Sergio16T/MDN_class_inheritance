var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');
btn.onclick = function() {
  var code = input.value;
  para.textContent = eval(code);
}
function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
Person.prototype.bio = function() {
  // First define a string, and make it equal to the part of
  // the bio that we know will always be the same.
  var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  // define a variable that will contain the pronoun part of
  // the second sentence
  var pronoun;
  // check what the value of gender is, and set pronoun
  // to an appropriate value in each case
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    pronoun = 'She likes ';
  } else {
    pronoun = 'They like ';
  }
  // add the pronoun string on to the end of the main string
  string += pronoun;
  // use another conditional to structure the last part of the
  // second sentence depending on whether the number of interests
  // is 1, 2, or 3
  if(this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if(this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    // if there are more than 2 interests, we loop through them
    // all, adding each one to the main string followed by a comma,
    // except for the last one, which needs an and & a full stop
    for(var i = 0; i < this.interests.length; i++) {
      if(i === this.interests.length - 1) {
        string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }
  // finally, with the string built, we alert() it
  alert(string);
};
Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}
var person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);


function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject; 
}


/*above we have defined a new constructor and it has a prototype property which by 
defauly just contains a reference to the constructor function itself. It does not 
contain the methods of the Person constructor's prototype property

below code add's that. and changes constructor property to Teacher
*/
Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });

Teacher.prototype.greeting = function() {
    var prefix; 

    if (this.gender === 'male' || this.gender ==='Male') {
    prefix = 'Mr. ';
    } else if (this.gender === 'female' || this.gender ==='Female') {
    prefix = 'Mrs.';
    } else {
    prefix ='Mx. '; 
    }

    alert(`Hello. My name is ${prefix} ${this.name.last} and I teach ${this.subject}.`)
}

var teacher1 = new Teacher('Abel', 'Brown', 32, 'male', ['video games', 'weightlifting'], 'Science'); 

console.log(teacher1); 


