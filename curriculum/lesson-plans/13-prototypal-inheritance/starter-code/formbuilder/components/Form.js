import Input from './Input.js';

// Example Output:
// <form>
//    <h2>title</h2>
//  ...<input>
//  <button class="btn btn-primary">Submit</button>
// </form>
const Form = function(title, inputs, onSubmit) {
  // create Input for every input in inputs
  
  // create form element

  // create title

  // append title

  // append all inputs to form

  // create button with type submit adn classes btn, btn-primary

  // add text Submit to button
  
  // append submit to form

  // BONUS: add submit event handler to form

  this.title = title;
  this.onSubmit = onSubmit;
  this.element = undefined;
};
// BONUS: get current values
Form.prototype.getCurrentValues = function() {
  // loop through all current inputs
    // grab the name and value

  // think through out to build build an object, either in one step or two

  // return object from this array { formKey: formValue }
};

export default Form;
