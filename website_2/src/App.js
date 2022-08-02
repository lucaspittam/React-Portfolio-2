import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import GlobalStyle from './globalStyles';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <>
        <GlobalStyle />
            <Particles options={particlesOptions} init={particlesInit}/>        
        </>
    );
}

export default App;
