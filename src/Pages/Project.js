import React from 'react';
import Project1Img from '../images/project-1.png';
import Project2Img from '../images/project-2.png';
import Project3Img from '../images/project-3.png';

const Project = () => {
    return (
        <div className='text-center lg:text-left my-16' id='project'>
            < h2 className='text-white text-3xl text-center' >PORTFOLIO</h2 >
            <div className="divider border-t-2 w-24 mx-auto border-y-2 border-primary"><span></span></div>

            <div className='grid lg:grid-cols-3 lg:gap-40 gap-12 lg:mx-16 mt-16'>
                <div className="card w-96 text-white border-2 border-slate-700">
                    <div className='card-img'>
                        <figure><img className='project-img' src={Project1Img} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Express Car Services</h2>
                        <p className='my-3'>A car parts selling application where user can easily buy car parts with few clicks</p>
                        <div>
                            <span className='text-white text-3xl mr-5'>
                                <a href="https://assignment-12-fb182.web.app/" target='_blank' rel='noreferrer'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </span>
                            <span className='text-white text-3xl '>
                                <a href="https://github.com/abujakariacse/express-car-part-client-side" target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i>
                                </a>
                            </span>
                        </div>
                        <div className='mt-3'>
                            <ul className='grid grid-cols-3 gap-2'>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>ReactJs</li>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>TailwindCSS</li>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>Firebase</li>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>ExpressJs</li>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>JWT</li>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>MongoDB</li>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>Heroku</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card w-96 text-white border-2 border-slate-600">
                    <div className='card-img'>
                        <figure><img className='project-img' src={Project2Img} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">WareHouse</h2>
                        <p className='my-3'>Warehouse's application, where user can buy and seller can stock more product.</p>
                        <div>
                            <span className='text-white text-3xl mr-5'>
                                <a href="https://wire-house-9427b.web.app/" target='_blank' rel='noreferrer'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </span>
                            <span className='text-white text-3xl '>
                                <a href="https://github.com/abujakariacse/ware-house-client-side" target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i>
                                </a>
                            </span>
                            <div className='mt-3'>
                                <ul className='grid grid-cols-3 gap-2'>
                                    <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>ReactJs</li>
                                    <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>TailwindCSS</li>
                                    <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>Firebase</li>
                                    <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>ExpressJs</li>
                                    <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>JWT</li>
                                    <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>MongoDB</li>
                                    <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3 dis'>Heroku</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card w-96 text-white border-2 border-slate-600">
                    <div className='card-img'>
                        <figure><img className='project-img' src={Project3Img} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Upfit (Gym Trainer)</h2>
                        <p className='my-3'>Upfit is the one-stop solution if you want to make fit yourself. where a trainer provide a gym service </p>
                        <div>
                            <span className='text-white text-3xl mr-5'>
                                <a href="https://assignment-ten-a33e4.web.app/" target='_blank' rel='noreferrer'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </span>
                            <span className='text-white text-3xl' target='_blank' rel='noreferrer'>
                                <a href="https://github.com/abujakariacse/up-fit" ><i className="fa-brands fa-github"></i>
                                </a>
                            </span>

                        </div>
                        <div className='mt-3'>
                            <ul className='grid grid-cols-2 gap-2'>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3'>ReactJs</li>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3'>Bootstrap</li>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3'>CSS3</li>
                                <li className='btn btn-xs rounded px-10 text-xs h-4 bg-slate-700 mr-3'>Firebase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Project;