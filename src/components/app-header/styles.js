import { css } from 'lit';

export const appHeaderStyles = css`
  :host {
    display: block;
    background-color: #fff;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    font-family: 'Segoe UI', sans-serif;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 0.75rem;
    color: #000;
  }

  .logo img {
    height: 24px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.95rem;
  }

  .actions a {
    text-decoration: none;
    color: #FF6200;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 500;
  }

  .language img {
    width: 20px;
    height: 14px;
    border-radius: 2px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .actions {
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }
  }
`;
