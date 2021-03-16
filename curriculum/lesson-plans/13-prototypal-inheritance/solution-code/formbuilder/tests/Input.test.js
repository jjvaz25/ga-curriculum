import { assert } from 'chai';  
import 'jsdom-global/register';

import Input from '../components/Input';
describe('Input', () => {
  it('should work', () => {
    const input = new Input('phone', 'text', 'Phone Number');

    assert.equal(input instanceof Input, true);

    assert.equal(input.name, 'phone');
    assert.equal(input.type, 'text');
    assert.equal(input.label, 'Phone Number');
    assert.isDefined(input.element, 'Input.element should be defined');
    assert.deepEqual(input.element.outerHTML, '<div class="form-group"><label>Phone Number</label><input class="form-control" type="text" name="phone"></div>', 'Input.element HTML should match');
    assert.deepEqual(input.inputElement.outerHTML, '<input class="form-control" type="text" name="phone">', 'Input.inputElement HTML should match');
  });
});
