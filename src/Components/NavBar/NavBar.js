import '../../styles/navbar.css'
import user from '../../Svg/user.svg'
import folder from '../../Svg/folder.svg'
import stack from '../../Svg/stack2.svg'
import mail from '../../Svg/mail.svg'
import logo from '../../Images/logo.png';

export default function NavBar() {
    return (
        <div className='centerNav'>
            <div className='inner-div bg-nav'>
                <img src={logo} alt='logo' className='logo'/>
                <div className='test-media'>
                    <nav>
                        <div className='nav-align'>
                            <img src={user} height="22px" width="22px" alt='test'/>
                            <a href="#about">About</a>
                        </div>
                        <div className='nav-align'>
                            <img src={folder} height="22px" width="22px" alt='test'/>
                            <a href="#projects">Projects</a>
                        </div>
                        
                        <div className='nav-align'>
                            <img src={stack} height="22px" width="22px" alt='test'/>
                            <a href="#skills">Skills</a>
                        </div>
                        <div className='nav-align'>
                            <img src={mail} height="22px" width="22px" alt='test'/>
                            <a href="#connect">Connect</a>
                        </div>
                    </nav>
                </div>
                
            </div>
        </div>
        
    );
}