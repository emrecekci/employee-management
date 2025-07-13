import { css } from 'lit';

export const employeeListStyles = css`
  :host {
    display: block;
    padding: 2rem;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
    background-color: #f4f4f4;
    min-height: 100dvh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  h2 {
    margin-top: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  input[type="search"] {
    padding: 0.5rem;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
    margin-top: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button.add-btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
  }

  th {
    background-color: white;
    color: #FF6200;
    font-weight: 600;
    border-bottom: 2px solid #FF6200;
    font-size: 0.875rem;
    text-align: left;
    padding: 0.75rem 1rem;
  }

  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #eee;
    font-size: 0.875rem;
    color: #333;
  }

  .actions button {
    margin-right: 0.5rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .actions button.edit {
    background-color: #5e5ca7;
    border: none;
    color: white;
    border-radius: 4px;
  }

  .actions button.delete {
    background-color: #FF6200;
    border: none;
    color: white;
    border-radius: 4px;
  }

  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .list-header h2 {
    color: #FF6200;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }

  .view-toggle button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    color: #999;
  }

  .view-toggle button.active {
    color: #FF6200;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 1rem;
  }

  .card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem 2rem;
  }

  .card .field {
    display: flex;
    flex-direction: column;
  }

  .card .label {
    font-weight: 500;
    color: #999;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }

  .card .value {
    font-size: 1rem;
    font-weight: 600;
    color: #111;
  }

  .card .actions {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 1rem;
  }

  .card .actions button.edit {
    background-color: #5e5ca7;
    color: white;
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 4px;
  }

  .card .actions button.delete {
    background-color: #FF6200;
    color: white;
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 4px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 0.5rem;
    grid-column: 1 / -1;
  }

  .pagination button {
    border: none;
    background-color: white;
    padding: 0.5rem 0.9rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    color: #333;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }

  .pagination button.active {
    background-color: #FF6200;
    color: white;
    font-weight: 600;
  }

  .pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .pagination .dots {
    padding: 0.5rem 0.9rem;
    font-size: 0.9rem;
    color: #999;
  }

  @media (max-width: 768px) {
    table, thead, tbody, th, td, tr {
      display: block;
    }

    th {
      display: none;
    }

    td {
      position: relative;
      padding-left: 50%;
      text-align: right;
    }

    td::before {
      content: attr(data-label);
      position: absolute;
      left: 1rem;
      top: 0.75rem;
      font-weight: bold;
      text-align: left;
    }

    .top-bar {
      flex-direction: column;
      align-items: flex-start;
    }

    .card {
      grid-template-columns: 1fr;
    }
  }
`
