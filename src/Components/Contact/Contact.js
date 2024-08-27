import '../../styles/contact.css'
import test from '../../Postgres.svg'

export default function Contact() {
    return (
        <div className='contact-center'>
            <div className='contact-bg contact-align-message'>
                <div className='contact-message-row'>
                    <div className='contact-connect'>
                        <h2>Want to connect?</h2>
                        <h1>Let's get started!</h1>
                    </div>
                    <div className='send-contact'>
                        <p className='send-message-box'>Send message</p>
                    </div>
                </div>
                <hr className='contact-line'></hr>
                <div className='contact-more'>
                    <div className='contact-email'>
                       <p>Connect</p>
                        <p className='email-padding'>atif.agboat@hotmail.com</p> 
                    </div>
                    <div className='more-info'>
                        <p className='explore-padding'>Explore more</p>
                        <img src={test} height="22px" width="22px" alt='test' className='info-padding'/>
                        <img src={test} height="22px" width="22px" alt='test' className='info-padding'/>
                        <img src={test} height="22px" width="22px" alt='test' className='info-padding'/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}