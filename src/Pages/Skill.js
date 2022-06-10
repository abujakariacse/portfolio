import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <div className='text-center lg:text-left' id='skill'>
            < h2 className='text-white text-3xl text-center' > MY SKILLS</h2 >
            <div className="divider border-t-2 w-24 mx-auto border-y-2 border-primary"><span></span></div>

            <div className='grid lg:grid-cols-3 lg:gap-48 lg:mx-40 mx-5 lg:mt-16 mt-8'>
                <div
                    className='w-80'>
                    <h2 className='text-white'>HTML</h2>
                    <ProgressBar bgColor='#23CE6B' completed={80} />
                    <h2 className='text-white'>CSS</h2>
                    <ProgressBar bgColor='#23CE6B' completed={85} />
                    <h2 className='text-white'>Bootstrap</h2>
                    <ProgressBar bgColor='#23CE6B' completed={90} />
                    <h2 className='text-white'>Tailwind CSS</h2>
                    <ProgressBar bgColor='#23CE6B' completed={90} />
                </div>
                <div className='w-80'>
                    <h2 className='text-white'>React Bootstrap</h2>
                    <ProgressBar bgColor='#23CE6B' completed={85} />
                    <h2 className='text-white'>Javascript</h2>
                    <ProgressBar bgColor='#23CE6B' completed={80} />
                    <h2 className='text-white'>ReactJS</h2>
                    <ProgressBar bgColor='#23CE6B' completed={75} />
                    <h2 className='text-white'>Firebase</h2>
                    <ProgressBar bgColor='#23CE6B' completed={80} />
                </div>
                <div className='w-80'>
                    <h2 className='text-white'>ExpressJS</h2>
                    <ProgressBar bgColor='#23CE6B' completed={70} />
                    <h2 className='text-white'>MongoDB</h2>
                    <ProgressBar bgColor='#23CE6B' completed={70} />
                    <h2 className='text-white'>Heroku</h2>
                    <ProgressBar bgColor='#23CE6B' completed={80} />
                    <h2 className='text-white'>Github</h2>
                    <ProgressBar bgColor='#23CE6B' completed={85} />
                </div>
            </div>
        </div >
    );
};

export default Skill;