// Styles
import './navbar.scss'

// Packages 
import { useState } from 'react'

// images
import { Logo, About, Project, Contact, HamMenu } from '../../assets/import'

// Project Data --- It is used to show the number of projects
import ProjectData from '../../context/Project.data.json'

const Navbar = () => {

    const [ navLinksToggle, setNavLinksToggle ] = useState('false')
    const [ projectData, setProjectData ] = useState(ProjectData);

    // Navbar Links toggling
    const navToggling = () => {
        navLinksToggle == 'false' ? setNavLinksToggle('true') : setNavLinksToggle('false')
    }

    return (
        <nav>
            <div>
                <a href='/' className='logoImg'><img src={Logo} alt="" /></a>
                <div onClick={navToggling} data-toggle={navLinksToggle}>
                    <ul>
                        <li><a href="/#about" className='nav-link'><About className='nav-svg-link' /> about</a></li>
                        <li><a href="/#project" className='nav-link'><Project className='nav-svg-link' /> project <span>{ projectData.length }</span> </a></li>
                        <li><a href="/#contact" className='nav-link'><Contact className='nav-svg-link' /> contact</a></li>
                    </ul>
                </div>
                <HamMenu className='ham-menu' onClick={navToggling} />
            </div>
        </nav>
    )
}

export default Navbar