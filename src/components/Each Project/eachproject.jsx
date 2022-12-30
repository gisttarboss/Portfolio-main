// Styles
import './eachproject.scss'

// Packages
import Button from '@mui/material/Button';
// ! AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Components
import { Stacks, Technology, ResponsiveBadge } from '../index'

const EachProject = ({ data, image }) => {

    const { id, name, stacks, technology, description, website, github } = data;

    return (
        <div className='eachProject' data-aos="zoom-in-up">
            <div className='information'>
                <p className='projectQuantity'>{ id }</p>
                <h2> { name } </h2>
                <p> { description } </p>
                <Stacks stacks={stacks} />
                <div>
            {/* <a href={github} target="_blank"><Button className='button' variant="contained">Source</Button></a> */}
                    { website != null ? <a href={website} target="_blank"><Button className='button' variant="contained">Website</Button></a> : "" }
                </div>
            </div>
            <div>
                <Technology nameOfTechnology={technology} />
                <ResponsiveBadge />
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default EachProject