import React from 'react';
import EmailContact from '../images/email-contact.png';

const Contact = () => {
    return (
        <div>
            <h2 className='text-white text-3xl text-center'>GET IN TOUCH</h2>
            <div className="divider border-t-2 w-24 mx-auto border-y-2 border-primary"><span></span></div>

            <div className="hero">
                <div className="hero-content grid lg:grid-cols-2 lg:gap-40">
                    <img className='rounded-lg' src={EmailContact} alt=' img of programmer abu jakaria' />
                    <div>
                        <form action="https://formspree.io/f/xqknjqqz" method="POST" className='text-center mt-8'>
                            <input type="email" placeholder="Your Email" name="email" class="input text-white input-bordered border-slate-600 bg-neutral input-primary min-w-full mb-4" required />

                            <input className='input input-bordered text-white border-slate-600 bg-neutral input-primary min-w-full mb-4' type="text" name="name" id="" placeholder='Your Name' required />
                            <textarea class="textarea textarea-primary min-w-full h-40 rounded-md p-2 text-white  bg-neutral input-bordered border border-slate-600 mb-4 resize-none" name="message" cols="30" rows="10" placeholder='Your Message' required></textarea>

                            <button className='btn btn-primary text-white text-base px-5 py-1 rounded  ml-2'>Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;