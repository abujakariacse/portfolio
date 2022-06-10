import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const Details = () => {
    const { id } = useParams();
    const { data: project, isLoading } = useQuery('project', () => fetch(`https://shrouded-oasis-53969.herokuapp.com/project/${id}`).then(res => res.json()))
    console.log(project)
    if (isLoading) {
        return <Loader></Loader>
    }
    const { _id, projectName, description, details, images, techlology, liveLink, clientSideCodeLink, serverSideCodeLink } = project;
    return (
        <div className='lg:mt-14'>
            <h2 className='text-white lg:text-3xl text-lg text-center'>Project Name: {projectName}</h2>
            <div className='grid lg:grid-cols-2 lg:gap-28 mt-10 lg:mx-24 mx-8'>
                <div className='detail-page-img-div rounded-lg'>
                    <img src={images[0]} alt="" />
                </div>
                <div className='mt-6 lg:mt-0'>
                    <h4 className='text-white text-2xl mb-3'>Project ID: {_id}</h4>
                    <h4 className='text-white text-2xl'>Description:</h4>
                    <p className='text-white text-lg'>{description}</p>
                    <h2 className='text-white text-2xl mt-4'>Features:</h2>
                    <div>
                        {
                            details?.map(detail => <ul
                                className='text-white lg:text-xl list-disc'
                                key={Math.random() * 10}
                            >
                                <li>{detail}</li>
                            </ul>)
                        }
                    </div>
                    <div>
                        <h3 className='text-white text-2xl mt-4'>Used Technology:-</h3>
                        <ul className='mt-4 grid grid-cols-3 gap-4'>
                            {
                                techlology?.map(tech => <li
                                    key={Math.random() * 20}
                                    className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 text-white'>{tech}</li>)

                            }

                        </ul>
                        <div className='mt-3 text-center'>
                            <span className='text-white text-3xl mr-5'>
                                <a href={liveLink} target='_blank' rel='noreferrer'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </span>
                            <span className='text-white text-3xl mr-5'>
                                <a href={clientSideCodeLink} target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i>
                                </a>
                            </span>
                            <span className='text-white text-3xl '>
                                <a href={serverSideCodeLink} target='_blank' rel='noreferrer'><i class="fa-solid fa-link"></i>
                                </a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 mt-12 lg:gap-12 gap-5 lg:mx-24 mb-16'>
                <div className='detail-img-viewer rounded-lg'>
                    <img className='rounded-md' src={images[1]} alt="" />
                </div>
                <div className='detail-img-viewer rounded-lg'>
                    <img className='rounded-md' src={images[2]} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Details;