const EMPLOYEE_STORE_KEY = 'employee-store';

export const employeeStore = {
  _employees: JSON.parse(localStorage.getItem(EMPLOYEE_STORE_KEY)) || [
  {
    id: 1,
    firstName: 'Ahmet',
    lastName: 'Veli',
    dob: '1990-05-10',
    employmentDate: '2022-09-23',
    phone: '+90 532 123 45 67',
    email: 'ahmet@ing.com',
    department: 'Analytics',
    position: 'Junior'
  },
  {
    id: 2,
    firstName: 'Ayşe',
    lastName: 'Demir',
    dob: '1988-03-14',
    employmentDate: '2021-11-10',
    phone: '+90 533 111 22 33',
    email: 'ayse@ing.com',
    department: 'Tech',
    position: 'Senior'
  },
  {
    id: 3,
    firstName: 'Mehmet',
    lastName: 'Kaya',
    dob: '1992-07-01',
    employmentDate: '2020-01-05',
    phone: '+90 534 444 55 66',
    email: 'mehmet@ing.com',
    department: 'Analytics',
    position: 'Medior'
  },
  {
    id: 4,
    firstName: 'Elif',
    lastName: 'Yılmaz',
    dob: '1995-12-20',
    employmentDate: '2023-02-14',
    phone: '+90 535 222 33 44',
    email: 'elif@ing.com',
    department: 'Tech',
    position: 'Junior'
  },
  {
    id: 5,
    firstName: 'Hasan',
    lastName: 'Çelik',
    dob: '1987-09-08',
    employmentDate: '2019-06-30',
    phone: '+90 536 666 77 88',
    email: 'hasan@ing.com',
    department: 'Analytics',
    position: 'Senior'
  },
  {
    id: 6,
    firstName: 'Zeynep',
    lastName: 'Koç',
    dob: '1993-04-18',
    employmentDate: '2021-04-01',
    phone: '+90 537 999 00 11',
    email: 'zeynep@ing.com',
    department: 'Tech',
    position: 'Medior'
  },
  {
    id: 7,
    firstName: 'Emre',
    lastName: 'Öztürk',
    dob: '1991-01-29',
    employmentDate: '2018-08-17',
    phone: '+90 538 888 99 00',
    email: 'emre@ing.com',
    department: 'Analytics',
    position: 'Junior'
  },
  {
    id: 8,
    firstName: 'Fatma',
    lastName: 'Arslan',
    dob: '1994-10-02',
    employmentDate: '2020-12-12',
    phone: '+90 539 101 20 30',
    email: 'fatma@ing.com',
    department: 'Tech',
    position: 'Senior'
  },
  {
    id: 9,
    firstName: 'Burak',
    lastName: 'Aydın',
    dob: '1990-11-11',
    employmentDate: '2017-03-22',
    phone: '+90 540 303 40 50',
    email: 'burak@ing.com',
    department: 'Analytics',
    position: 'Medior'
  },
  {
    id: 10,
    firstName: 'Selin',
    lastName: 'Kurt',
    dob: '1989-06-25',
    employmentDate: '2016-10-05',
    phone: '+90 541 707 80 90',
    email: 'selin@ing.com',
    department: 'Tech',
    position: 'Junior'
  }
],

  getAll() {
    return [...this._employees];
  },

  get(id) {
    return this._employees.find(e => e.id == id);
  },

  add(employee) {
    this._employees.push(employee);
    this._commit();
  },

  update(id, updatedEmployee) {
    this._employees = this._employees.map(e => e.id == id ? updatedEmployee : e);
    this._commit();
  },

  remove(id) {
    this._employees = this._employees.filter(e => e.id !== id);
    this._commit();
  },

  _commit() {
    localStorage.setItem(EMPLOYEE_STORE_KEY, JSON.stringify(this._employees));
    window.dispatchEvent(new CustomEvent('employee-store-changed'));
  }
};
