import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Header from "./components/layout/Header";
import { getUserApiAction } from "./components/modules/login/actions";
import Main from "./components/layout/Main";

function App() {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const userData = useSelector((state: any) => state.logindata);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userData?._id) {
      const token = localStorage.getItem("token");
      if (token) dispatch(getUserApiAction());
    }
  }, [userData]);
  return (
    <>
    <ThemeProvider theme={theme}>
    <div>
        <Header setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen} />
        <Main setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen} />
      </div>
  </ThemeProvider>
  </>
  );
}

export default App;
