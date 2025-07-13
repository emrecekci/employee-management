import { LitElement, html, css } from 'lit';
import { i18n } from '../../locales/i18n.js';
import { confirmModalStyles } from './stlyes.js';

class ConfirmModal extends LitElement {
  static styles = confirmModalStyles;
  static properties = {
    name: { type: String },
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('language-changed', () => this.requestUpdate());
  }

  render() {
    return html`
      <div class="overlay" @click="${this._cancel}">
        <div class="modal" @click="${e => e.stopPropagation()}">
          <h3>${i18n.t('deleteConfirm')}</h3>
          <p><strong>${this.name}</strong> ${i18n.t('deleteMessage')}</p>
          <div class="buttons">
            <button class="proceed" @click="${this._confirm}">${i18n.t('proceed')}</button>
            <button class="cancel" @click="${this._cancel}">${i18n.t('cancel')}</button>
          </div>
        </div>
      </div>
    `;
  }

  _confirm() {
    this.dispatchEvent(new CustomEvent('confirm-delete', {
      bubbles: true,
      composed: true
    }));
    this.remove();
  }

  _cancel() {
    this.remove();
  }
}

customElements.define('confirm-modal', ConfirmModal);
