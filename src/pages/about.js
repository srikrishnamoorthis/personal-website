import React from 'react';
import PropTypes from 'prop-types';
import myPhoto from '../../styles/img/my_photo.jpg';
import ContactLinks from '../components/contactLinks';

About.propTypes = {};
About.displayName = 'About';

function About(props) {
    return (
        <div className='dark:text-[#aaaaaa] text-[#353534] pt-8'>
            <div className='text-xl pb-2 text-[#73706D] dark:text-[#797979]'>ABOUT</div>
            <h1 className='text-7xl pb-4 font-semibold dark:text-white'>Sri Krishnamoorthi</h1>
            <div className='text-4xl pb-4 dark:text-[#F6F5F1]'>UI Developer, and sports enthusiast</div>
            <div className='flex flex-row flex-wrap-reverse lg:flex-nowrap pt-4'>
                <div className='text-xl'>
                    <div className=''>
                        After earning my undergraduate degree in computer science engineering, I began 
                        my professional career as front end developer in 2016.
                        <br/><br/>
                        I currently work at NetApp, builiding user interface for cloud based Saas product.
                        You can read more about my experiences, skills in the PDF attached below<br/><br/>
                        <button className='block transition-transform hover:translate-x-8 ease-in'>My Resume</button>
                        <span className='block pt-8'>
                            In my spare time I love playing badminton, trying out new adventures and travel to new places.
                        </span>
                        <ContactLinks />
                    </div>
                </div>
                <img src={myPhoto} className='w-[500px] h-[500px] pb-4 lg:pb-0 lg:ml-8 rounded-lg' />
            </div>
        </div>
    )
}

export default About;