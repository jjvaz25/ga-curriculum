// Create Input Constructor
// EXAMPLE OUTPUT:
// <div class="form-group">
//   <label for="exampleInputPassword1">Password</label>
//   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
// </div> 
const Input = function(name, type, label) {
  const formGroup = document.createElement('div');
  formGroup.classList.add('form-group');

  formGroup.innerHTML = `
    <label>${label}</label>
    <input name="${name}" type="${type}" class="form-control">
  `;

  const inputElement = formGroup.querySelector('input');

  // standard props
  this.inputElement = inputElement;
  this.element = formGroup;
  this.type = type;
  this.name = name;
  this.label = label;
};

export default Input;
