import { LitElement, html, css } from 'lit';
import { employeeStore } from '../../store/employee-store.js';
import { i18n } from '../../locales/i18n.js';
import { employeeFormStyles } from './styles.js';


class EmployeeForm extends LitElement {

    static styles = employeeFormStyles;


  static properties = {
    employee: { type: Object },
  };

  constructor() {
    super();
    this.employee = {
      id: null,
      firstName: '',
      lastName: '',
      dob: '',
      employmentDate: '',
      phone: '',
      email: '',
      department: '',
      position: ''
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('language-changed', () => this.requestUpdate());
    const url = new URL(window.location.href);
    const pathParts = url.pathname.split('/');
    const id = pathParts.includes('edit') ? Number(pathParts.pop()) : null;
    if (id) {
      const existing = employeeStore.get(id);
      if (existing) this.employee = { ...existing };
    }
  }

  render() {
    return html`
      <h2>${this.employee.id ? i18n.t('editEmployee') : i18n.t('addEmployee')}</h2>
      <form @submit="${this._handleSubmit}">
        <label>${i18n.t('firstName')}<input name="firstName" .value="${this.employee.firstName}" required /></label>
        <label>${i18n.t('lastName')}<input name="lastName" .value="${this.employee.lastName}" required /></label>
        <label>${i18n.t('employmentDate')}<input type="date" name="employmentDate" .value="${this.employee.employmentDate}" required /></label>
        <label>${i18n.t('dob')}<input type="date" name="dob" .value="${this.employee.dob}" required /></label>
        <label>${i18n.t('phone')}<input name="phone" .value="${this.employee.phone}" required /></label>
        <label>${i18n.t('email')}<input type="email" name="email" .value="${this.employee.email}" required /></label>
        <label>${i18n.t('department')}
          <select name="department" .value="${this.employee.department}" required>
            <option value="">${i18n.t('pleaseSelect')}</option>
            <option value="Analytics">Analytics</option>
            <option value="Tech">Tech</option>
          </select>
        </label>
        <label>${i18n.t('position')}
          <select name="position" .value="${this.employee.position}" required>
            <option value="">${i18n.t('pleaseSelect')}</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
          </select>
        </label>
        <div class="form-actions">
          <button type="submit" class="save">${i18n.t('save')}</button>
          <button type="button" class="cancel" @click="${this._cancel}">${i18n.t('cancel')}</button>
        </div>
      </form>
    `;
  }

  _handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updated = Object.fromEntries(formData.entries());
    updated.id = this.employee.id || Date.now();

    if (this.employee.id) {
      employeeStore.update(updated.id, updated);
    } else {
      employeeStore.add(updated);
    }

    window.history.pushState({}, '', '/employees');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  _cancel() {
    window.history.pushState({}, '', '/employees');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

customElements.define('employee-form', EmployeeForm);
