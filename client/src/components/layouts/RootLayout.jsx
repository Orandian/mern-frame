import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="w-screen h-screen bg-mainBackgroundColor">
      <Outlet />
    </div>
  );
};

export default RootLayout;
