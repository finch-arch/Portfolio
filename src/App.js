import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cf from './components/Cf';
import { createContext,useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);
function App() {
  const[theme,setTheme] = useState("dark");
  const[text,setText] = useState("Enable");
  const toggleTheme = () =>{
     setTheme((curr)=>(curr==="light" ? "dark" : "light"));
     setText((curr)=>(curr==="Enable" ? "Disable" : "Enable"));
  }
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className="App" id={theme}>
    <Navbar/>
    <Home/>
    <ReactSwitch onChange={toggleTheme} checked={theme==="light"}/>
    <div className="toggle">{text} Light Mode</div>
    <About/>
    <Skills/>
    <Projects/>
    <Cf/>
    <Contact/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
