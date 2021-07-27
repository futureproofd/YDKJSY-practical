/***
 * Demonstrating the execution context while using the 'this' keyword
 */
function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}.`);
  };
}

var assignment = classroom("Marcus");
// "Marcus says to study undefined". -- the outer classroom function makes no reference
// to a 'this' keyword. It's execution context defaults to the global object (in a browser this is window)
// therefore it is undefined.
console.log(assignment());

// with execution context
var homework = {
  topic: "JS",
  // our execution context of classroom is now within an object.
  assignment: assignment,
};

// Marcus says to study JS.
// the 'this' keyword for the function call will be the homework object
homework.assignment();

// Another way to invoke a function within a specific execution context
var otherHomework = {
  topic: "Poetry",
};

// Marcus says to study Poetry.
assignment.call(otherHomework);
