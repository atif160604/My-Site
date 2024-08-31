import atif from '../../atif5.png'
import "../../styles/about.css"

export default function AboutMe() {
    return (
        <section className='center'>
            <div className='position'>
                <img src={atif} className='image' alt="This is atif" />
                <div className='para-position'>
                    <p>I was born in Edinburg, Texas and graduated with a Bachelors in Computer Science, with a minor in Cyber Security, from the University of Texas at San Antonio this past year.</p>
                    <p>Since graduating I have had freelance experience building functional web applications with cutting edge technologies.</p>
                    <p>n my "free time" I continue to build applications that solve problems I encounter frequently, always trying to implement new technologies.</p>
                </div>
            </div>
        </section>
        
    );
}