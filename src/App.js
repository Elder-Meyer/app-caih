/*App.js*/
import { MyRoutes } from "./router/Routes";
import { createTheme } from '@mui/material';
import {ThemeProvider} from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together
      light: '#F2F2F2',
      main: '#404040',
      dark: '#D99C2B',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#404040',
    },
  },
});

function App() {
  return (
    
      <div className="layout">
        <ThemeProvider theme={theme}>
          <MyRoutes />
        </ThemeProvider>
      </div>
    
  );
}

export default App;
