import { LitElement, html } from 'lit';
import { employeeListStyles } from './styles.js';
import { employeeStore } from '../../store/employee-store.js';
import { i18n } from '../../locales/i18n.js';
import '../confirm-modal/'

class EmployeeList extends LitElement {
  static styles = employeeListStyles;

  static properties = {
    employees: { type: Array },
    viewMode: { type: String },
    currentPage: { type: Number },
    pageSize: { type: Number }
  };

  constructor() {
    super();
    this.employees = employeeStore.getAll();
    this.viewMode = 'list';
    this.currentPage = 1;
    this.pageSize = 10;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('employee-store-changed', this._handleStoreChange);
    window.addEventListener('language-changed', () => this.requestUpdate());
  }

  disconnectedCallback() {
    window.removeEventListener('employee-store-changed', this._handleStoreChange);
    super.disconnectedCallback();
  }

 _handleStoreChange = () => {
  this.employees = employeeStore.getAll();

  const totalPages = Math.ceil(this.employees.length / this.pageSize);
  if (this.currentPage > totalPages) {
    this.currentPage = Math.max(1, totalPages);
  }
};

  _setView(mode) {
    this.viewMode = mode;
  }

  _paginate(items) {
    const start = (this.currentPage - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }

  _changePage(page) {
    this.currentPage = page;
  }

  _renderPagination() {
    const totalPages = Math.ceil(this.employees.length / this.pageSize);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i <= 3 || i > totalPages - 2 || Math.abs(i - this.currentPage) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    return html`
      <div class="pagination">
        <button ?disabled=${this.currentPage === 1} @click=${() => this._changePage(this.currentPage - 1)}>&lt;</button>
        ${pages.map((page) =>
          page === '...'
            ? html`<span class="dots">...</span>`
            : html`<button class=${this.currentPage === page ? 'active' : ''} @click=${() => this._changePage(page)}>${page}</button>`
        )}
        <button ?disabled=${this.currentPage === totalPages} @click=${() => this._changePage(this.currentPage + 1)}>&gt;</button>
      </div>
    `;
  }

  render() {
    return html`
      <div class="list-header">
        <h2>${i18n.t('employeeList')}</h2>
        <div class="view-toggle">
          <button @click="${() => this._setView('list')}" class="${this.viewMode === 'list' ? 'active' : ''}" title="List view">
            <span>☰</span>
          </button>
          <button @click="${() => this._setView('card')}" class="${this.viewMode === 'card' ? 'active' : ''}" title="Card view">
            <span>☷</span>
          </button>
        </div>
      </div>

      ${this.viewMode === 'list' ? this._renderTable() : this._renderCardView()}
      ${this._renderPagination()}
    `;
  }

  _renderTable() {
    const paginated = this._paginate(this.employees);
    return html`
      <table>
        <thead>
          <tr>
            <th>${i18n.t('firstName')}</th>
            <th>${i18n.t('lastName')}</th>
            <th>${i18n.t('employmentDate')}</th>
            <th>${i18n.t('dob')}</th>
            <th>${i18n.t('phone')}</th>
            <th>${i18n.t('email')}</th>
            <th>${i18n.t('department')}</th>
            <th>${i18n.t('position')}</th>
            <th>${i18n.t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${paginated.map(
            (e) => html`
              <tr>
                <td data-label="${i18n.t('firstName')}">${e.firstName}</td>
                <td data-label="${i18n.t('lastName')}">${e.lastName}</td>
                <td data-label="${i18n.t('employmentDate')}">${e.employmentDate}</td>
                <td data-label="${i18n.t('dob')}">${e.dob}</td>
                <td data-label="${i18n.t('phone')}">${e.phone}</td>
                <td data-label="${i18n.t('email')}">${e.email}</td>
                <td data-label="${i18n.t('department')}">${e.department}</td>
                <td data-label="${i18n.t('position')}">${e.position}</td>
                <td class="actions" data-label="${i18n.t('actions')}">
                  <button class="edit" @click="${() => this._edit(e.id)}">${i18n.t('edit')}</button>
                  <button class="delete" @click="${() => this._delete(e.id)}">${i18n.t('delete')}</button>
                </td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }

  _renderCardView() {
    const paginated = this._paginate(this.employees);
    return html`
      <div class="card-container">
        ${paginated.map(
          (e) => html`
            <div class="card">
              <div class="row">
                <div><span class="label">${i18n.t('firstName')}:</span><div class="value">${e.firstName}</div></div>
                <div><span class="label">${i18n.t('lastName')}:</span><div class="value">${e.lastName}</div></div>
              </div>
              <div class="row">
                <div><span class="label">${i18n.t('employmentDate')}:</span><div class="value">${e.employmentDate}</div></div>
                <div><span class="label">${i18n.t('dob')}:</span><div class="value">${e.dob}</div></div>
              </div>
              <div class="row">
                <div><span class="label">${i18n.t('phone')}:</span><div class="value">${e.phone}</div></div>
                <div><span class="label">${i18n.t('email')}:</span><div class="value">${e.email}</div></div>
              </div>
              <div class="row">
                <div><span class="label">${i18n.t('department')}:</span><div class="value">${e.department}</div></div>
                <div><span class="label">${i18n.t('position')}:</span><div class="value">${e.position}</div></div>
              </div>
              <div class="actions">
                <button class="edit" @click="${() => this._edit(e.id)}">✎ ${i18n.t('edit')}</button>
                <button class="delete" @click="${() => this._delete(e.id)}">🗑 ${i18n.t('delete')}</button>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  _edit(id) {
    window.history.pushState({}, '', `/employees/edit/${id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  _delete(id) {
    const employee = this.employees.find(e => e.id === id);
    const modal = document.createElement('confirm-modal');
    modal.name = `${employee.firstName} ${employee.lastName}`;
    modal.addEventListener('confirm-delete', () => {
      employeeStore.remove(id);
      this.employees = employeeStore.getAll();
    });
    document.body.appendChild(modal);
  }
}

customElements.define('employee-list', EmployeeList);