// Styles
import './socialMedia.scss'

// Packages
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialMedia = () => {

    const [ socialMediaImg, setSocialMediaImg ] = useState('https://cdn-icons-png.flaticon.com/512/1968/1968750.png');
    const [ socialMediaToggle, setSocialMediaToggle ] = useState('false')

    const mediaToggling = (toggle, img) => {
        setSocialMediaToggle(toggle)
        setSocialMediaImg(img);
    }
    
    const SocialMedia = () => {
        socialMediaToggle == 'false' ? 
        mediaToggling('true', 'https://cdn-icons-png.flaticon.com/512/753/753345.png') :
        mediaToggling('false', 'https://cdn-icons-png.flaticon.com/512/1968/1968750.png')
    }

    return (
        <div className='socialMedia' onClick={ SocialMedia }>
            <img src={socialMediaImg} alt="" />
            <div data-socialMedia-toggle={ socialMediaToggle }>
                
                <a href='https://github.com/gisttarboss' target="_blank" className='icons'>
                    <GitHubIcon />
                    <p>GitHub</p>
                </a>
                <a href='https://www.linkedin.com/in/ifeanyichukwu-uche-878a60230/' target="_blank" className='icons'>
                    <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="" />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}

export default SocialMedia