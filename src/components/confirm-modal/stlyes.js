import { css } from 'lit';

export const confirmModalStyles = css`
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  }

  .modal h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #FF6200;
  }

  .modal p {
    margin: 1rem 0;
    color: #555;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  button {
    flex: 1;
    margin: 0 0.25rem;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .proceed {
    background-color: #FF6200;
    color: white;
  }

  .cancel {
    background-color: white;
    color: #5e5ca7;
    border: 2px solid #5e5ca7;
  }
`;
