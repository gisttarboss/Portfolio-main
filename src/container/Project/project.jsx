// Styles
import './project.scss'

// Packages
import { gsap } from 'gsap'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';

// Images
import {
    UltraNFT,
    Nike,
    Gpt3
} from '../../assets/import'

// Components
import { EachProject, Language, Skills } from '../../components'

// Project's Data
import ProjectData from '../../context/Project.data.json'

const Project = () => {

    const [ projectData, setProjectData ] = useState(ProjectData);
    const [ buttonValue, setButtonValue ] = useState('What I know');

    useEffect(() => {
        gsap.to('#project', {
            opacity: 1,
            delay: 1,
            duration: 1
        })
    }, [])

    //! this section will be deleted
    // const showLanguage = () => {
    //     const testing = document.querySelector('.languages');
    //     const data_language = testing.getAttribute('data-language-toggle');
    //     if (data_language == 'false') {
    //         testing.setAttribute('data-language-toggle', 'true')
    //         setButtonValue('Close It')
    //     } else {
    //         testing.setAttribute('data-language-toggle', 'false')
    //         setButtonValue('What I know')
    //     }
    //     console.log(data_language)
    // }

    return (
        <div id='project'>
            <div>
                <h1 className="sectionTitle">Project</h1>
                {/* <div className='dropDownLanguage'>
                    <Button className='whatIKnow'> { buttonValue } </Button>
                    <Language />
                </div> */}
                <Skills />
                <div className='projects'>
                    <h1> working on adding more projects</h1>
                   {/*   <EachProject data={projectData[0]} image={UltraNFT} /> */}
                    <EachProject data={projectData[1]} image={Nike} />
                   {/* <EachProject data={projectData[2]} image={Monster} /> */}
                  {/* <EachProject data={projectData[2]} image={Gpt3} /> */}
                </div>
            </div>
        </div>
    )
}

export default Project
