import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Order seems to matter. If Mantine is imported after tailwind, the tailwind class passed with className is not applied.
import '@mantine/core/styles.css';
import './index.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider>
    <App />
  </MantineProvider>,
);
