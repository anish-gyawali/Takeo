import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "../../constant/routes";
import Dashboard from "../modules/dashboard";
import Error from "../common/Error";
interface MainProps {
  setIsModelOpen: any;
  isModelOpen: boolean;
}
const Main = ({ setIsModelOpen, isModelOpen }: MainProps) => {
  const userData = useSelector((state: any) => state.loginData);
  let routesCombination: any = [];
  if (userData.userType) {
    routesCombination = [...routes[userData.userType], ...routes.common];
  }
  return (
    <Routes>
      {!userData._id && (
        <Route
          path="/"
          element={
            <Dashboard
              setIsModelOpen={setIsModelOpen}
              isModelOpen={isModelOpen}
            />
          }
        />
      )}
      {userData._id &&
        routesCombination.map((route: any) => (
          <Route path={route.path} element={<route.component />} />
        ))}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Main;
