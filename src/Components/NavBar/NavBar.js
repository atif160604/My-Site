import '../../styles/navbar.css'
import test from '../../Postgres.svg'

export default function NavBar() {
    return (
        <div className='centerNav'>
            <div className='inner-div bg-nav'>
                <img src={test} height="30px" width="30px" alt='test' className='logo'/>
                <nav>
                    <img src={test} height="22px" width="22px" alt='test'/>
                    <a href="/html/">About</a>
                    <img src={test} height="22px" width="22px" alt='test'/>
                    <a href="/css/">Projects</a>
                    <img src={test} height="22px" width="22px" alt='test'/>
                    <a href="/js/">Skills</a>
                    <img src={test} height="22px" width="22px" alt='test'/>
                    <a href="/python/">Connect</a>
                </nav>
            </div>
        </div>
        
    );
}