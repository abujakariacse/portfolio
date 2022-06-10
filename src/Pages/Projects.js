import React from 'react';
import { useQuery } from 'react-query';
import Loader from './Loader';
import Project from './Project';

const Projects = () => {
    const { data: projects, isLoading } = useQuery('projects', () => fetch('http://localhost:5000/projects').then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='text-center lg:text-left my-16' id='project'>
            < h2 className='text-white text-3xl text-center' >PORTFOLIO</h2 >
            <div className="divider border-t-2 w-24 mx-auto border-y-2 border-primary"><span></span></div>

            <div className='grid lg:grid-cols-3 lg:gap-40 gap-12 lg:mx-16 mt-16'>
                {
                    projects?.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }

            </div>
        </div>
    );
};

export default Projects;