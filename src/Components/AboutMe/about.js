import atif from '../../atif5.png'
import "../../styles/about.css"

export default function AboutMe() {
    return (
        <section className='center'>
            <div className='position'>
                <img src={atif} className='image' alt="This is atif" />
                <div className='para-position'>
                    <p>I am an undergraduate at Northeastern University studying computer science with a minor in robotics. My areas of interest include full-stack development and machine learning </p>
                    <p>Through internships and personal projects I have had experince in building functional web and iOS applications with the latest technologies.</p>
                    <p>In my "free time" I like learning new skills and solving problems I frequently encounter, in pursuit of improving my skills. </p>
                </div>
            </div>
        </section>
        
    );
}