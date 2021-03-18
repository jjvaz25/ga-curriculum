import Form from './components/Form.js';
import Input from './components/Input.js';

const onLoadHandler = () => {
  const newInput = new Input('firstname', 'text', 'First Name');

  document.getElementById('main').append(newInput.element);

  // Form
  // const myFormTitle = 'My First Form';
  // const myInputs = [
  //   {
  //     name: 'email',
  //     type: 'email',
  //     label: 'Email Address'
  //   },
  //   {
  //     name: 'name',
  //     type: 'text',
  //     label: 'Full Name'
  //   }
  // ];
  // const myOnSubmit = console.log;
  // const myForm = new Form(myFormTitle, myInputs, myOnSubmit);

  // // append form
  // window.document.body.append(myForm.element);
};

// Wait for DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}
