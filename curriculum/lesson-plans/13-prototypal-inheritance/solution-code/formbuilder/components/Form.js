import Input from './Input.js';

// Example Output:
// <form>
//    <h2>title</h2>
//  ...<input>
//  <button class="btn btn-primary">Submit</button>
// </form>
const Form = function(title, inputs, onSubmit) {
  // create Input for every input in inputs
  this.inputs = inputs.map((input) => {
    return new Input(input.name, input.type, input.label);
  });
  console.log(this.inputs)
  
  // create form element
  const formElement = document.createElement('form');

  // create title
  const formTitle = document.createElement('h2');
  formTitle.textContent = title;
  formElement.append(formTitle);

  // append all inputs
  this.inputs.forEach((input) => {
    formElement.append(input.element);
  });

  // append all inputs to form
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  // create button with type submit adn classes btn, btn-primary
  submitButton.classList.add('btn', 'btn-primary');
  // add text Submit to button
  submitButton.textContent = 'Submit';
  // append submit to form
  formElement.append(submitButton);

  // BONUS: add submit event handler to form
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = this.getCurrentValues();

    this.onSubmit(formData);
  });

  this.title = title;
  this.onSubmit = onSubmit;
  this.element = formElement;
};
// BONUS: get current values
Form.prototype.getCurrentValues = function() {
  const inputEntries = this.inputs.map((input) => {
    return [
      input.name,
      input.inputElement.value
    ];
  });
  return Object.fromEntries(inputEntries);
};

export default Form;
