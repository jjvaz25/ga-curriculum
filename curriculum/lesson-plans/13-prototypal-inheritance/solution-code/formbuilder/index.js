import Form from './components/Form';
import Input from './components/Input';

const onLoadHandler = () => {
  // FORM 1
  const myFormTitle = 'My First Form';
  const myInputs = [
    {
      name: 'email',
      type: 'email',
      label: 'Email Address'
    }
  ];
  const myOnSubmit = console.log;
  const myForm = new Form(myFormTitle, myInputs, myOnSubmit);

  // append form 1
  window.document.body.append(myForm.element);

  // FORM 2
  const myFormTitle2 = 'My Second Form';
  const myInputs2 = [
    {
      name: 'email',
      type: 'email',
      label: 'Email Address'
    },
    {
      name: 'name',
      type: 'text',
      label: 'Full Name'
    }
  ];
  const myOnSubmit2 = console.log;
  const myForm2 = new Form(myFormTitle2, myInputs2, myOnSubmit2);

  // append form 2
  window.document.body.append(myForm2.element);
};

// Wait for DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}
