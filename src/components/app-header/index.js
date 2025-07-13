import { LitElement, html, css } from 'lit';
import { i18n } from '../../locales/i18n.js';
import { appHeaderStyles } from './styles.js';


class AppHeader extends LitElement {

  static styles = appHeaderStyles;


  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('language-changed', () => this.requestUpdate());
  }

  render() {
    return html`
      <header class="nav">
        <div class="logo">
          <img src="https://images.seeklogo.com/logo-png/21/1/ing-logo-png_seeklogo-217264.png" alt="ING logo" />
          ING
        </div>
        <div class="actions">
          <a href="/employees" @click=${this._navigate}><span>👤</span> ${i18n.t('employeeList')}</a>
          <a href="/employees/add" @click=${this._navigate}><span>➕</span> ${i18n.t('addEmployee')}</a>
          <div class="language" @click=${this._toggleLang}>
            <img src=${i18n.getLang() === 'tr' 
              ? 'https://flagcdn.com/w40/tr.png' 
              : 'https://flagcdn.com/w40/gb.png'} alt="lang" />
          </div>
        </div>
      </header>
    `;
  }

  _navigate(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  _toggleLang() {
    const next = i18n.getLang() === 'tr' ? 'en' : 'tr';
    i18n.setLang(next);
    this.requestUpdate();
  }
}

customElements.define('app-header', AppHeader);
