import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import '../src/components/employee-list/';

const fakeData = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  firstName: `Name${i}`,
  lastName: `Surname${i}`,
  dob: '2000-01-01',
  employmentDate: '2020-01-01',
  phone: '123',
  email: `a${i}@b.com`,
  department: 'Tech',
  position: 'Junior'
}));

suite('<employee-list>', () => {
  setup(() => {
    localStorage.clear();
  });

  test('displays first 10 employees on first page', async () => {
    const el = await fixture(html`<employee-list .employees=${fakeData}></employee-list>`);
    const rows = el.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(10);
  });

  test('changes viewMode on button click', async () => {
    const el = await fixture(html`<employee-list .employees=${fakeData}></employee-list>`);
    const toggleButtons = el.shadowRoot.querySelectorAll('.view-toggle button');
    toggleButtons[1].click();
    expect(el.viewMode).to.equal('card');
  });
});
