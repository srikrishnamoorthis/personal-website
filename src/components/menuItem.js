import React from 'react';
import PropTypes from 'prop-types';

MenuItem.propTypes = {
    isActive: PropTypes.bool,
    label: PropTypes.string,
    href: PropTypes.string,
    Icon: PropTypes.node,
};
MenuItem.displayName = 'MenuItem';

function MenuItem({isActive, label, href, Icon}) {
    return (
        <li className='flex p-4 flex-start align-center text-white'>
            <a href={href} className='flex'>
                <Icon className='text-white' />
                {isActive && <div className='ml-4 bg-white h-6 w-px'/>}
                <span className='pl-6'>{label}</span>
            </a>
        </li>
    );
}

export default MenuItem;