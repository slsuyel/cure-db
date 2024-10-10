import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.css';

import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </Provider>
  </StrictMode>,
);
