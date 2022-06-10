import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    console.log(project)
    const { _id, images, description, projectName, techlology, liveLink, clientSideCodeLink, } = project;
    const navigate = useNavigate();
    const handleViewProject = () => {
        navigate(`/projectDetails/${_id}`)
    }
    return (
        <div>
            <div className="card w-11/12 mx-auto text-white border-2 border-slate-700">
                <div className='card-img'>
                    <figure><img className='project-img' src={images[0]} alt="project" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{projectName}</h2>
                    <p className='my-2'>{description}</p>
                    <div>
                        <span className='text-white text-3xl mr-5'>
                            <a href={liveLink} target='_blank' rel='noreferrer'>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </span>
                        <span className='text-white text-3xl '>
                            <a href={clientSideCodeLink} target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i>
                            </a>
                        </span>
                    </div>
                    <div className='mt-3'>
                        <ul className='grid grid-cols-3 gap-2'>
                            {
                                techlology?.map(tech => <li
                                    key={Math.random() * 20}
                                    className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 text-white'>{tech}</li>)
                            }
                        </ul>
                    </div>
                    <button onClick={handleViewProject} className='btn btn-md rounded px-10 mt-5 text-base h-2 bg-slate-700 mr-3'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;