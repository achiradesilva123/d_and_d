import './App.css';
import {ThemeProvider} from "@mui/material/styles";
import DefaultTheme from "./theme/DefaultTheme";
import Routes from "./route/routes";
import {BrowserRouter as Router} from 'react-router-dom';
// import {useRoutes} from "react-router-dom"
import Onboarding from "./page/Onbording/onboarding";

function App() {

  // const appRoutes = useRoutes(routes);

  return (
      <Router>
          <ThemeProvider theme={DefaultTheme}>
            <Routes/>
          </ThemeProvider>
      </Router>
  );
}

export default App;
