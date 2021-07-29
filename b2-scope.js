/**
 * var and parameters are function-scoped, and let/const signal block-scoped declarations
 * The catch clause is it's own block scope declaration
 */
function scopeExample() {
  try {
    doesntExist();
  } catch (err) {
    console.log(err);
    // reference error: doesntExist is not defined

    // let is block-scoped so it's scope resides here
    let onlyHere = true;
    // hoist to top of function
    var outerVariable = true;
  }

  // because var is function-scoped, it gets hoisted out of the catch-block scope to the function.
  // therefore it logs out 'true'
  console.log(outerVariable);
  // err is not defined
  console.log(err);
}

scopeExample();
