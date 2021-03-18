import Input from './Input.js';

// Example Output:
// <form>
//    <h2>title</h2>
//  ...<input>
//  <button class="btn btn-primary">Submit</button>
// </form>
class Form {
  constructor(title, inputs, onSubmit) {
    this.inputs = inputs.map((input) => {
      return new Input(input.name, input.type, input.label);
    });
    
    const formElement = document.createElement('form');
  
    // create title
    const formTitle = document.createElement('h2');
    formTitle.textContent = title;
    formElement.append(formTitle);
  
    // append all inputs
    this.inputs.forEach((input) => {
      formElement.append(input.element);
    });
  
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.classList.add('btn', 'btn-primary');
    submitButton.textContent = 'Submit';
    formElement.append(submitButton);
  
    // add event handler
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
  
      const formData = this.getCurrentValues();
  
      this.onSubmit(formData);
    });
  
    this.title = title;
    this.onSubmit = onSubmit;
    this.element = formElement;
  }

  getCurrentValues() {
    const inputEntries = this.inputs.map((input) => {
      return [
        input.name,
        input.inputElement.value
      ];
    });
    return Object.fromEntries(inputEntries);
  };
}

export default Form;
