import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme/theme'
import NavBar from './components/NavBar'
import Section from './components/Section'


function App() {
  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
   <NavBar/>
    <Section color="primary"/>
    </div></ThemeProvider>
  );
}

export default App;
