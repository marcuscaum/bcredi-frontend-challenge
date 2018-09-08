import { injectGlobal } from 'styled-components';

const resetToastStyles = () =>
  injectGlobal`
    div.toast-container {
      align-items: center;
      bottom: 16px;
      display: flex;
      flex-direction: column;
      padding: 0;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      margin-left: 0;
    }
    .toast-container .toast-container__body {
      margin: 0;
      flex: unset;
      text-align: center;
      font-size: 16px;
      color: white;
      width: 100%;
    }
    .toast-container .toast-container__toast {
      background: #2ecc71;
      display: flex;
      align-items: center;
      color: unset;
      width: 100%;
      height: 64px;
      position: absolute;
      min-height: unset;
      box-sizing: unset;
      margin-bottom: 1rem;
      padding: 0;
      border-radius: 0;
      box-shadow: unset;
      justify-content: center
      max-height: unset;
      overflow: unset;
      font-family: unset;
      cursor: pointer;
      direction: ltr;
    }
  `;

export default resetToastStyles;
