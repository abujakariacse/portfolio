import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';


const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <ThreeCircles
                color="#23CE6B"
                height={110}
                width={110}
                ariaLabel="three-circles-rotating"
            />
        </div>
    );
};

export default Loader;