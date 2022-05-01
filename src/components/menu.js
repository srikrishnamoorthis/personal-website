import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Menu(props) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenuVisibility = () => setIsOpen(!isOpen);

   const hamburgerLineClassName = 'h-1 w-6 bg-black mb-1 transition-transform duration-500 ease-linear';

	return (
		<div className='flex flex-col'>
			<div className={classnames('flex-col z-10 mt-2 m-1 w-6 transition-all duration-500 ease-in', { 'transform rotate-180': false })} 
				onClick={toggleMenuVisibility}>
				<div className={classnames(hamburgerLineClassName, { 'transform -rotate-45 translate-y-2': isOpen })}></div>
				<div className={classnames(hamburgerLineClassName, { 'opacity-0': isOpen })}></div>
				<div className={classnames(hamburgerLineClassName, { 'transform rotate-45 -translate-y-2': isOpen })}></div>
			</div>
			{isOpen && 
				<ul className={classnames('flex flex-col justify-center items-start transition-all duration-500 \
					ease-in transform h-full', { 'translate-x-full': !isOpen })}>
					<li className='text-black text-3xl pl-10'>Home</li>
					<li className='text-black text-3xl pl-10'>Portfolio</li>
					<li className='text-black text-3xl pl-10'>About me</li>
				</ul>
			}
			<span className={classnames({'hidden': !isOpen, 'inline-block absolute w-8 bg-gray-500 z-0 rounded-full': isOpen})}></span>
		</div>
	);
}

Menu.propTypes = {

};

export default Menu;

