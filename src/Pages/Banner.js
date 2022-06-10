import React from 'react';
import BannerImg from '../images/banner.svg';
import Typed from 'react-typed';
import { saveAs } from "file-saver";
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    const saveFile = () => {
        saveAs(
            "https://drive.google.com/uc?export=download&id=1TrOOEuzUWmM-qYS94xkf6bZ0GZzJLN-N",
            "Resume of Md. Abu Jakaria"
        );
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        className='lg:w-2/4' src={BannerImg} alt='' />
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold text-white mb-3">Hey I'm</h1>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white">Abu Jakaria</h1>
                            <h2 className='text-2xl pt-3 font-bold text-primary'>
                                <Typed
                                    strings={[
                                        'Jr. MERN Stack Developer',
                                        'Software Developer',
                                        'Frontend Developer']}
                                    typeSpeed={110}
                                    backSpeed={50}
                                    loop
                                />
                            </h2>
                            <p className="py-4 text-white font-serif">I'm Abu Jakaria, a highly skilled developer with strong confidence with quality and high performance web applications seeks the rules of Junior Software Developer at Javascript, React, Express JS and modern Javascript libraries.</p>
                        </div>
                        <div
                            className='mb-4'>
                            <span className='text-2xl text-white mr-3 hover:text-primary transition ease-in-out duration-300'><a href="https://github.com/abujakariacse" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></span>
                            <span className='text-white text-2xl mr-3 hover:text-primary transition ease-in-out duration-300'><a href="https://linkedin.com/in/abujakariacse" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></span>
                            <span className='text-white text-2xl mr-3 hover:text-primary transition ease-in-out duration-300'><a href="https://twitter.com/abujakariacse" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></span>
                            <span className='text-white text-2xl mr-3 hover:text-primary transition ease-in-out duration-300'><a href="https://facebook.com/abujakariacse" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></span>
                            <span className='text-white text-2xl mr-3 hover:text-primary transition ease-in-out duration-300'><a href="https://mail.google.com/mail/u/0/?fs=1&to=abujakariacse@gmail.com&tf=cm" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></span>
                        </div>
                        <div
                            className='mt-6'>
                            <button
                                onClick={saveFile} className="btn btn-primary rounded text-white hover:bg-info">GET RESUME</button>
                            <button
                                className="btn btn-primary rounded text-white ml-4 hover:bg-info transition ease-in-out duration-300"><HashLink to='#about'>ABOUT ME</HashLink> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;