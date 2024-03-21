import { Outlet } from "react-router-dom";

export const NoUserLayout = () => {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};
