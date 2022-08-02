import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserApiAction } from "./components/modules/login/actions";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import theme from "./theme";

function App() {
  const [isModelOpen, setIsModelOpen] = React.useState<boolean>(false);
  const userData = useSelector((state: any) => state.logindata);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userData?._id) {
      const token = localStorage.getItem("token");
      if (token) dispatch(getUserApiAction());
    }
  }, [userData]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen} />
        <Main setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen} />
      </div>
    </ThemeProvider>
  );
}

export default App;
