import '../../styles/navbar.css'
import user from '../../Svg/user.svg'
import folder from '../../Svg/folder.svg'
import stack from '../../Svg/stack2.svg'
import mail from '../../Svg/mail.svg'

export default function NavBar() {
    return (
        <div className='centerNav'>
            <div className='inner-div bg-nav'>
                <img src={user} height="30px" width="30px" alt='test' className='logo'/>
                <nav>
                    <div className='nav-align'>
                        <img src={user} height="22px" width="22px" alt='test'/>
                        <a href="/html/">About</a>
                    </div>
                    <div className='nav-align'>
                        <img src={folder} height="22px" width="22px" alt='test'/>
                        <a href="/css/">Projects</a>
                    </div>
                    
                    <div className='nav-align'>
                        <img src={stack} height="22px" width="22px" alt='test'/>
                        <a href="/js/">Skills</a>
                    </div>
                    <div className='nav-align'>
                        <img src={mail} height="22px" width="22px" alt='test'/>
                        <a href="/python/">Connect</a>
                    </div>
                </nav>
            </div>
        </div>
        
    );
}