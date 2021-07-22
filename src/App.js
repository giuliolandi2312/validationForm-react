import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { lime } from '@material-ui/core/colors';
import Form from './components/Form';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Typage from'./pages/Typage';



const theme = createTheme({
  palette: {
    primary: {
      main: '#009688'
    },
    secondary: lime

  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})




function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/">
      <Form />
      </Route>
      <Route path="/typage">
        <Typage />
      </Route>
      </Router>
    </ThemeProvider>

  );
}

export default App;
