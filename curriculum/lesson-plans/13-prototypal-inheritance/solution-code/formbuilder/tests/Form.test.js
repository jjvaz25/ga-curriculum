import { assert } from 'chai';  
import 'jsdom-global/register';
import sinon from 'sinon';

import Input from '../components/Input';
import Form from '../components/Form';
describe('Form', () => {
  it('should work', () => {
    const title = "My Title";
    const inputs = [
      {
        name: 'name',
        type: 'text',
        label: 'Full Name'
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email Address'
      }
    ];
    const onSubmit = () => {};
    const form = new Form(title, inputs, onSubmit);

    assert.equal(form instanceof Form, true, 'should be instance of Form');
    assert.isDefined(form.element, 'form.element should be defined');
    assert.equal(
      form.element.outerHTML, 
      `<form><h2>My Title</h2><div class="form-group"><label>Full Name</label><input class="form-control" type="text" name="name"></div><div class="form-group"><label>Email Address</label><input class="form-control" type="email" name="email"></div><button type="submit" class="btn btn-primary">Submit</button></form>`,
      'form HTML should match expectation'
    );

    assert.deepEqual(form.inputs.map((input) => input instanceof Input), [true, true], 'every item in Form.inputs should be instance of Input');
  });
  it('onSubmit and getCurrentValues should work', () => {
    const title = "My Title";
    const inputs = [
      {
        name: 'name',
        type: 'text',
        label: 'Full Name'
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email Address'
      }
    ];
    const onSubmit = sinon.spy();
    const form = new Form(title, inputs, onSubmit);
    assert.deepEqual(form.onSubmit, onSubmit, 'onSubmit handler should be on Form');

    assert.deepEqual(
      form.getCurrentValues(), { name: '', email: '' }, 
      'getCurrentValues should get blank form values'
    );
    const formInputs = form.element.querySelectorAll('input');
    formInputs[0].value = 'Stuart';
    formInputs[1].value = 'joe@schmoe.com';
    assert.deepEqual(form.getCurrentValues(), { name: 'Stuart', email: 'joe@schmoe.com' }, 'getCurrentValues should get real values');

    // submit form and verify onSubmit was called with correct arguments
    form.element.submit();
    sinon.assert.calledOnce(onSubmit);
    sinon.assert.calledWith(onSubmit, { name: 'Stuart', email: 'joe@schmoe.com' });
  });
});
