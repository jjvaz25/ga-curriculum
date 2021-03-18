// Create Input Constructor
// EXAMPLE OUTPUT:
// <div class="form-group">
//   <label for="exampleInputPassword1">Password</label>
//   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
// </div> 

class Input {
  constructor(name, type, label) {
    // 1. build form group
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    // 2. build label
    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    // 3. build input
    const inputElement = document.createElement('input');
    inputElement.classList.add('form-control');
    inputElement.setAttribute("type", type);
    inputElement.setAttribute("name", name);

    // 4. add event listeners
    inputElement.addEventListener('input', (evt) => {
      this.keystrokes.push({ key: evt.data, type: evt.inputType });
    });
    inputElement.addEventListener('change', (evt) => {
      this.changes.push(evt.target.value);
    });

    // append label and input to form group
    formGroup.appendChild(labelElement);
    formGroup.appendChild(inputElement);

    // standard props
    this.keystrokes = [];
    this.changes = [];
    this.type = type;
    this.name = name;
    this.label = label;
    this.element = formGroup;
    this.inputElement = inputElement;
  }
}

export default Input;
