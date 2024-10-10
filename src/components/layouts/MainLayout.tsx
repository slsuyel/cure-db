import { Outlet } from 'react-router-dom';

import { GoToTop } from 'go-to-top-react';
import ScrollToTop from '../global/ScrollToTop';

const MainLayout = () => {
  return (
    <ScrollToTop>
      <Outlet />
      <GoToTop />
    </ScrollToTop>
  );
};

export default MainLayout;
