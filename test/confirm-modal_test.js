import { fixture, assert, oneEvent } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import '../src/components/confirm-modal/'; // confirm-modal tanımı yüklensin

suite('confirm-modal', () => {
  test('dispatches confirm-delete event when proceed is clicked', async () => {
    const el = await fixture(html`<confirm-modal name="Test User"></confirm-modal>`);
    const button = el.shadowRoot.querySelector('button.proceed');

    setTimeout(() => button.click());
    const event = await oneEvent(el, 'confirm-delete');

    assert.exists(event, 'confirm-delete event should be dispatched');
  });

  test('removes modal on cancel click', async () => {
    const el = await fixture(html`<confirm-modal name="Test User"></confirm-modal>`);
    const cancelButton = el.shadowRoot.querySelector('button.cancel');

    cancelButton.click();
    await new Promise((r) => setTimeout(r, 50));

    assert.notExists(document.querySelector('confirm-modal'), 'modal should be removed from DOM');
  });
});
