import PortfolioImg from '../images/portfolio-img.jpg';
import { saveAs } from "file-saver";
import { HashLink } from 'react-router-hash-link';

const About = () => {
    const saveFile = e => {
        e.preventDefault();
        saveAs(
            "https://drive.google.com/uc?export=download&id=1C-6kwPGqOCsF8_Qv7c-5JDtQfAItS6ER"
        );
    }
    return (
        <div className='text-center lg:text-left' id='about'>
            <h2 className='text-white text-3xl text-center'>ABOUT ME</h2>
            <div className="divider border-t-2 w-24 mx-auto border-y-2 border-primary"><span></span></div>

            <div className="hero lg:py-24">
                <div className="hero-content flex-col lg:flex-row items-start lg:gap-32">
                    <div>
                        <div
                            className='lg:w-4/6 mb-6 mx-auto lg:mx-0'>
                            <p className="text-white font-serif text-lg">I am a MERN stack web developer working with 6 months of learning experience.
                                If you need any kind of web solution then you are welcome and I am here to solve this. I know web technologies and comfortable with working with these tools. I have done various projects in front-end development.I have comprehensive knowledge in programming including HTML, CSS,Bootstrap, Tailwind CSS, JavaScript, ReactJs, NodeJs, MongoDB, Express-JS Hands-on experience.</p>
                        </div>
                        <div className='mb-3 lg:mb-0'>
                            <button onClick={saveFile} className="btn btn-primary rounded text-white text-base hover:bg-info transition ease-in-out duration-300 mr-4">Get Resume</button>
                            <button className="btn btn-primary rounded text-white text-base hover:bg-info transition ease-in-out duration-300">
                                <HashLink to='#project'>My Portfolio</HashLink>
                            </button>
                        </div>
                    </div>
                    <img className='rounded-lg hover:scale-110 transition ease-in-out duration-700 ml-3' src={PortfolioImg} alt='img of programmer abu jakaria' />
                </div>
            </div>

        </div>
    );
};

export default About;