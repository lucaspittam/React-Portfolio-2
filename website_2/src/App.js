import { Route, Router, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";



function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

 

{/* For framer-motion animation on page change! */}
<AnimatePresence exitBeforeEnter>
<Router  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>

    </Router>
</AnimatePresence>
    
    
    </ThemeProvider>


    
    </>
    
}

export default App