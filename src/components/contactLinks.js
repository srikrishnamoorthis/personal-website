import React from 'react';
import PropTypes from 'prop-types';
import {ImLinkedin, ImMail3} from 'react-icons/im';

ContactLinks.prototypes = {};
ContactLinks.displayName = 'ContactLinks';

function ContactLinks(props) {
    return (
        <>
            <div className='block pt-8'>Feel free to react out through any of the platforms below:</div>
            <ul className='text-xl pt-8'>
                <li className='flex pb-4 transition-transform hover:translate-x-8 ease-in'>
                    <ImMail3 />
                    <span className='pl-2'>srikrishnamoorthis@gmail.com</span>
                </li>
                <li className='flex pb-4 transition-transform hover:translate-x-8 ease-in'>
                    <ImLinkedin />
                    <span className='pl-2'>Linkedin</span>
                </li>
            </ul>
        </>
    )
}

export default ContactLinks;
