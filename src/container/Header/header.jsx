// Styles
import './header.scss';

// Packages
import { gsap } from 'gsap';
import { useEffect } from 'react';

const Header = ({ data, img }) => {
    
    const { name, job, about } = data;

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.headerImg', {
            opacity: 1,
            scale: 1,
            x: 0,
            ease: "Power4.easeOut",
            rotation: 0,
            delay: 1,
            duration: 1.5
        })
        .to('#name', {
            y: 0,
            opacity: 1,
            duration: .5
        }, "-=1")
        .to('#about', {
            y: 0,
            opacity: 1,
            duration: .5
        }, '-=.5')
        .to('#name', {
            rotation: 0,
            duration: .3
        })
        .to('#about', {
            rotation: 0,
            duration: .3
        })
    }, [])

    const nameHovering = (rotate, scale, opacity, rotate2, scale2) => {
        const myImg = document.querySelector('#myImg');
        myImg.style.transform = `rotate(${rotate}deg) scale(${scale})`;

        const reactBadge = document.querySelector('#reactBadge');
        reactBadge.style.opacity = opacity;
        reactBadge.style.transform = `rotate(${rotate2}deg) scale(${scale2})`;
    }
    const mouseEnter = () => {
        nameHovering(10, 1.1, 1, -30, 1)
    }
    const mouseLeave = () => {
        nameHovering(0, 1, 0, -90, 0)
    }

    return(
        <header id="about">
            <div className='container'>
                <div className='headerInfo'>
                    <h1 id="name" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} > 
                        Hi There! <br />
                        I am <br />
                        <span>{ name }</span>
                    </h1>
                    <br />
                    <p id='about'> { about } </p>
                    <br/>
                    <h1 id='about'> My Hobbies</h1>
                    <br/>
                    <p id='about'> Watching football, video games, Food, Talking</p>
                </div>
                <div className='headerImg'>
                    <img src={ img } alt="Header Img" id='myImg' />
                    <h1 id="reactBadge">Frontend Developer</h1>
                </div>
            </div>
        </header>
    )
}

export default Header