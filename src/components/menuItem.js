import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

MenuItem.propTypes = {
    isActive: PropTypes.bool,
    label: PropTypes.string,
    href: PropTypes.string,
    Icon: PropTypes.node,
};
MenuItem.displayName = 'MenuItem';

function MenuItem({isActive, label, href, Icon}) {
    return (
        <li className='flex p-4 flex-start align-center text-black dark:text-white'>
            <a href={href} className='flex p-1'>
                <Icon className='text-black dark:text-white' />
                {isActive && <div className='ml-4 bg-black dark:bg-white h-6 w-px'/>}
                <span className={classnames({'pl-6': isActive, 'pl-10': !isActive})}>{label}</span>
            </a>
        </li>
    );
}

export default MenuItem;