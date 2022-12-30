// Styles
import './skills.scss'

// Skill Data
import SkillData from './skillData.json'

const skills = () => {

    return (
        <div className='skills'>
            <h1>Skills</h1>
            <div className='skillImg'>
                { SkillData.map(S => {
                    return (
                        <div data-aos="fade-right">
                            <img src={ S.img } alt="" />
                            <p> { S.name } </p>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default skills