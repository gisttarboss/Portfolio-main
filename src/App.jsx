// Styles
import './components/Light & Dark/light&dark.scss'

// Packages
import { useState, useEffect } from 'react'

// Components
import { 
  Navbar, 
  Footer, 
  SocialMedia, 
  GitHub, 
  LoadingPage 
} from './components'

import { MaterialUISwitch } from './components/Light & Dark/light&dark'

// Containers
import { 
  Header, 
  Project, 
  Contact 
} from './container'

// Hooks
import useLocalStorage from './hooks/useLocalStorage'

// Images
import { LightHeaderImg, DarkHeaderImg } from './assets/import'


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {

  const [ headerImage, setHeaderImage ] = useState(LightHeaderImg)
  const [ darkMode, setDarkMode ] = useLocalStorage('darkMode', false);

  const information = {
    name: "Ifeanyichukwu Uche",
    job: "Front-End Developer",
    about: "Self-taught front-end developer with over 4 years of experience. Having a good grasp of Front-End tech stacks like HTML5, CSS, Bootstrap, Tailwind CSS, JavaScript, Typescript, vue.js, Bootstrap, PHP, Python, Mysql, and React. Personable and knowledgeable IT support technician with over 4 years of experience assisting customers with various hardware and software-related issues. Provided in-depth technical support to clients at a Tier 2 level, solving 99.2% of issues without transferring to Tier 3 support. Seeking to offer expert technical support to enterprise organizations as the L3 tech support engineer",
  }

  const darkAndLightToggling = (e) => {
    const value = e.target.checked;
    value ? setDarkMode(true) : setDarkMode(false);
  }

  const darkTheme = (color, img) => {
    document.body.classList.add(color)
    setHeaderImage(img)
  }
  const lightTheme = (color, img) => {
    document.body.classList.remove(color)
    setHeaderImage(img)
  }

  useEffect(() => {
    darkMode ? darkTheme('dark', DarkHeaderImg) : lightTheme('dark', LightHeaderImg)
  }, [darkMode])

  // Source code popup 
 

  // Loading Page time out
  setTimeout(() => {
    const loading = document.querySelector('.loading');
    loading.style.display = 'none'
  }, 2000)

  return (
    // Main-Project
    <div>
      <LoadingPage />
      
      <Navbar />
      <SocialMedia />
      <MaterialUISwitch onClick={darkAndLightToggling} defaultChecked={darkMode} />
      <Header data={information} img={headerImage}  />
      <Project />
      <Contact />
      <Footer owner={information.name} />
    </div>
  );
}

export default App;
