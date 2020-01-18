import React, {Component} from 'react';

import FirstSection from "./sections/firstSection";
import SkillSection from "./sections/skillSection";
import AboutSection from "./sections/aboutSection";
import SnowStorm from 'react-snowstorm';
import NavbarMenu from "./components/Navbar";
import './App.css';



class App extends Component {
    render() {
        return (
            <div className="App" id="App">
                <SnowStorm />
                <FirstSection/>
                <AboutSection/>
                <SkillSection/>
            </div>

        );
    }
}

export default App;
