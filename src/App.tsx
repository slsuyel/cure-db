import { GoToTop } from 'go-to-top-react';
import ScrollToTop from './components/global/ScrollToTop';

import DashboardLayout from './components/layouts/DashboardLayout';
import '@fontsource/poppins/400.css';

const App = () => {
  return (
    <ScrollToTop>
      <DashboardLayout />
      <GoToTop />
    </ScrollToTop>
  );
};

export default App;
