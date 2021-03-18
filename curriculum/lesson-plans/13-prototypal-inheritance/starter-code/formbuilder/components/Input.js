// Create Input Constructor
// EXAMPLE OUTPUT:
// <div class="form-group">
//   <label for="exampleInputPassword1">Password</label>
//   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
// </div> 
const Input = function(name, type, label) {
  // 1. build form group
  const formGroup = document.createElement('div');
  formGroup.classList.add('form-group');
  // 2. build label
  // 3. build input
  formGroup.innerHTML = `
    <label>${label}</label>
    <input name="${name}" type="${type}" class="form-control">
  `;
  // 4. add event listeners
  const inputElement = formGroup.querySelector('input');

  // 5. append label and input to form group

  // standard props
  this.keystrokes = [];
  this.changes = [];
  this.type = type;
  this.name = name;
  this.label = label;
  this.element = formGroup;
  this.inputElement = inputElement;
};

export default Input;
