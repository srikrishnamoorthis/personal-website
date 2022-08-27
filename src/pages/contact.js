import React from 'react';
import PropTypes from 'prop-types';
import ContactLinks from '../components/contactLinks';

Contact.propTypes = {};
Contact.displayName = 'Contact';

function Contact(props) {
    return (
        <div className='pt-8'>
            <div className='text-7xl py-12 font-semibold'>
                Let&apos;s make something great!
            </div>
            <h1 className='text-4xl pb-4 font-semibold'>Contact</h1>
            <p className='text-xl'>
                I&apos;m seeking out opportunities to work with companies. I want to bring my collective experience to table where we can work together 
                to solve real world problems in a way it enhances all of our respective knowledge and experience.
            </p>
            <ContactLinks />
        </div>
    )
}

export default Contact;
