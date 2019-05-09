/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
/* Window/Global Object Binding :-
    It is when the use of `this` keyword refers or points to the global scope/context, and the Object referred to could be window or console object. */
// code example for Window Binding
function globalBinding() {
  console.log(`An example of Global Binding :-`);
  console.log(this);
}
//globalBinding();

// Principle 2
/* Implicit Binding :-
    It is the usage of `this` keyword within an implied or immediate Object's context. Here, the `this` keyword assumes the context of it's immediate environment or Object within which it is been use. */

// code example for Implicit Binding
const js = {
  name: `JavaScript`,
  version: `ES6`,
  supportsOOP: true,
  printInfo: function () {
    console.log(`Name:- ${this.name}`);
    console.log(`Version:- ${this.version}`);
    console.log(`Supports OOP:- ${this.supportsOOP}`);

    console.log(this);
  }
};
//js.printInfo();

// Principle 3
/* New Binding :- 
    This refers to the binding of `this` keyword on an instance of an object, created and assigned to a variable using the `new` keyword. */

// code example for New Binding
function Language(name, version, supportsOOP) {
  this.name = name;
  this.version = version;
  this.supportsOOP = supportsOOP;

  this.printInfo = function () {
    console.log(`Name:- ${this.name}`);
    console.log(`Version:- ${this.version}`);
    console.log(`Supports OOP:- ${this.supportsOOP}`);

    console.log(this);
  }
}

const py = new Language(`Python`, `2.7`, true);
//py.printInfo();

// Principle 4
/* Explicit Binding :- 
    This kind of binding takes place when a context (eg: an object) is given or passed to the `this` keyword explicitly using JavaSricpt built-in methods like; call() and apply() */

// code example for Explicit Binding
/* Referring to Example 3 above... */
const vb = new Language(`Visual Basic`, `6.0`, false);
//vb.printInfo();

const standAlonePrintInfo = vb.printInfo;
standAlonePrintInfo.apply(py);
