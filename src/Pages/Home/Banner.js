import React from 'react';
import BannerImg from '../../images/banner.svg';
import Typed from 'react-typed';


const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-2/4' src={BannerImg} alt='' />
                    <div className='text-center lg:text-left'>
                        <h1 class="text-2xl font-bold text-white mb-3">Hey I'm</h1>
                        <h1 class="text-4xl lg:text-5xl font-bold text-white">Abu Jakaria</h1>
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
                        <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary text-white hover:bg-info">Contact Me</button>
                        <button class="btn btn-primary text-white ml-4 hover:bg-info transition ease-in-out duration-300">Get Resume</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;