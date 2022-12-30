// Styles
import './contact.scss'

// Packages
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Images
import { ContactSVG } from '../../assets/import'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const sentPopUp = document.querySelector('#sent');

        emailjs.sendForm('service_99hxrty', 'template_k92hwax', form.current, 'O-nA9azRfxwwWNHbd')
        .then((result) => {
            console.log(result.text);
            sentPopUp.style.display = 'flex';
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset()
    };

    const closingSent = () => {
        const sentPopUp = document.querySelector('#sent');
        sentPopUp.style.display = "none";
    }

    return (
        <div className='contact' id='contact'>
            <h1 className="sectionTitle">Contact</h1>
            <div className='container'>
                <div className='contactSVG' data-aos="zoom-in" >
                    <ContactSVG />
                </div>
                <form ref={ form } onSubmit={ sendEmail } data-aos="zoom-out">
                    <input type="text" name='name' placeholder='name' required/>
                    <input type="email" name='email' placeholder='email' required />
                    <input type='url' name='socialMedia' placeholder='Social Media: https://' required />
                    <div>
                        <input type="text" name='phoneCode' placeholder='+62' />
                        <input type="text" name='phoneNO' placeholder='phone number optional*' />
                    </div>
                    <textarea name="message" id="" cols="30" rows="10" defaultValue="Hi Ifeanyi," required></textarea>
                    <Button type='submit' className='submit' variant="contained" endIcon={<SendIcon />} >
                        Send
                    </Button>
                </form>
            </div>

            <div id="sent" onClick={ closingSent }>
                <div>
                    <h1>Thank You for the Email</h1>
                    <p>I'll read it soon</p>
                </div>
            </div>
        </div>
    )
}

export default Contact