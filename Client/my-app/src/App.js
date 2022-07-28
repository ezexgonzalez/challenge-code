import './App.css';
import Nav from './Components/Nav/Nav';
import Results from './Components/Results/Results';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Nav />
        <Results />
      </div>
    </ThemeProvider>
  );
}

export default App;
