import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { lightTheme } from './components/Themes';
import {  Route } from 'react-router';
import { Routes } from 'react-router-dom';

import Main from './components/Main';
import AboutPage from './components/AboutPage';
import MySkillsPage from './components/MySkillsPage';
import WorkPage from './components/WorkPage';

function App() {
    
   const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    return (
        <>
        <GlobalStyle />
        <ThemeProvider theme={lightTheme}>  
            <Routes>
                <Route exact path="/main" component={Main}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/skills" component={MySkillsPage}/>
                <Route exact path="/work" component={WorkPage}/>
            </Routes>
        </ThemeProvider>
            <Particles options={particlesOptions} init={particlesInit}/>        
        </>
    );
}

export default App;
