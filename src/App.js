import { LitElement, html } from 'lit';
import { initRouter } from './router/router.js';
import './components/app-header/';

class AppShell extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    initRouter();
  }

  render() {
    return html`
      <app-header></app-header>
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

customElements.define('app-shell', AppShell);
