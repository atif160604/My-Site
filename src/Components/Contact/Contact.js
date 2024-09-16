import '../../styles/contact.css'
import resume from '../../Svg/resume.svg'
import linkedin from '../../Svg/linkedin.svg'
import github from '../../Svg/github.svg'

export default function Contact() {
    return (
        <div className='contact-center'>
            <div className='contact-bg contact-align-message'>
                <div className='contact-message-row'>
                    <div className='contact-connect'>
                        <h2 className='h2-contact'>Want to connect?</h2>
                        <h1 className='h1-contact'>Let's get started!</h1>
                    </div>
                    <div className='send-contact'>
                        <a href="mailto:atif.agboat@hotmail.com">
                           <p className='send-message-box'>Send message</p> 
                        </a>
                        
                    </div>
                </div>
                <hr className='contact-line'></hr>
                <div className='contact-more'>
                    <div className='contact-email'>
                       <p className='font-medium'>Connect</p>
                        <p className='email-padding'>atif.agboat@hotmail.com</p> 
                    </div>
                    <div className='more-info'>
                        <p className='explore-padding font-medium'>Explore more</p>
                        <a href='https://drive.google.com/file/d/1yPDBUfZDTeVIgoZ5qJYccI4zOmFgQaBq/view?usp=sharing'>
                           <img src={resume} height="22px" width="22px" alt='test' className='info-padding'/> 
                        </a>
                        <a href='https://github.com/atif160604'>
                            <img src={github} height="22px" width="22px" alt='test' className='info-padding'/>
                        </a>
                        <a href='https://www.linkedin.com/in/atif-agboatwala/'>
                            <img src={linkedin} height="22px" width="22px" alt='test' className='info-padding'/>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}