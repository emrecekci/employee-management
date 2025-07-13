import { css } from 'lit';

export const employeeFormStyles = css`
  :host {
    display: block;
    padding: 2rem;
    font-family: 'Segoe UI', sans-serif;
    background-color: #f4f4f4;
    min-height: 100dvh;
    box-sizing: border-box;
    overflow-x: hidden;
  }
    h2 {
      color: #FF6200;
    margin-top: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  form {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem 2rem;
  }

  @media (min-width: 480px) {
    form {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 768px) {
    form {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    form {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    color: #333;
  }

  input, select {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #aaa;
    border-radius: 4px;
  }

  .form-actions {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  button.save {
    background-color: #FF6200;
    color: white;
  }

  button.cancel {
    background-color: white;
    color: #5e5ca7;
    border: 2px solid #5e5ca7;
  }
`;
