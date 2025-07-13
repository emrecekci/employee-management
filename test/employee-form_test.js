import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import '../src/components/employee-form/';
import { employeeStore } from '../src/store/employee-store.js';

suite('<employee-form>', () => {
  test('submits a new employee to the store', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    const root = el.shadowRoot;

    root.querySelector('input[name="firstName"]').value = 'A';
    root.querySelector('input[name="lastName"]').value = 'B';
    root.querySelector('input[name="dob"]').value = '2000-01-01';
    root.querySelector('input[name="employmentDate"]').value = '2020-01-01';
    root.querySelector('input[name="phone"]').value = '123';
    root.querySelector('input[name="email"]').value = 'a@b.com';
    root.querySelector('select[name="department"]').value = 'Tech';
    root.querySelector('select[name="position"]').value = 'Junior';

    root.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    const added = employeeStore.getAll().find(e => e.firstName === 'A');
    expect(added).to.exist;
    expect(added.lastName).to.equal('B');
  });
});
