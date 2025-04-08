import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import Button from '@my-monorepo/my-new-lib/button';
import Buttons from '@my-app/app/button';
import ReactSelect from '@my-monorepo/my-new-lib/react-select'
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* <p>{process.env.VITE_}</p>
    <p>{process.env.NX_BASE}</p> */}
    <p>{import.meta.env.VITE_API_URL}</p>
    <Button label="Hello" />
    <Buttons label='Hello2' />
    <ReactSelect />
    <App />
  </StrictMode>
);
