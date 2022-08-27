import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ImHome3, ImUser, ImBriefcase, ImBubble, ImWrench} from 'react-icons/im';
import MenuItem from './menuItem';

Menu.propTypes = {

};
Menu.displayName = 'Menu';

function Menu(props) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenuVisibility = () => setIsOpen(!isOpen);

   const isHomePage = window.location.pathname.includes('/');
   const isAboutPage = window.location.pathname.includes('/about');
   const isPortfolio = window.location.pathname.includes('/portfolio');
   const isSkills = window.location.pathname.includes('/skills');
   const isContact = window.location.pathname.includes('/contact');

	return (
		<div className='flex flex-col absolute justify-center align-center'>
            <span className={classnames({'absolute w-14 h-full z-0 rounded-full': true, 'bg-[#333]': isOpen})}></span>
			<div className={classnames('flex-col justify-center z-10 p-4 pt-5 h-14 w-14 transition-all duration-500 ease-in hover:bg-[#333] hover:rounded-full', { 'transform rotate-180': false })} 
				onClick={toggleMenuVisibility}>
				<div className={classnames('h-0.5 w-6 bg-black dark:bg-white mb-1 transition-transform duration-500 ease-linear rounded-sm', { 'transform -rotate-45 translate-y-1.5': isOpen })}></div>
				<div className={classnames('h-0.5 w-6 bg-black dark:bg-white mb-1 transition-transform duration-500 ease-linear rounded-sm', { 'opacity-0': isOpen })}></div>
				<div className={classnames('h-0.5 w-6 bg-black dark:bg-white transition-transform duration-500 ease-linear rounded-sm', { 'transform rotate-45 -translate-y-1.5': isOpen })}></div>
			</div>
			{isOpen && 
				<ul className={classnames('flex flex-col justify-center items-start transition-all duration-500 \
					ease-in transform h-full', { 'translate-x-full': !isOpen })}>
					<MenuItem 
                        label='HOME' 
                        Icon={ImHome3}
                        isActive={isHomePage}
                        href='/' />
                    <MenuItem 
                        label='PORTFOLIO' 
                        Icon={ImBriefcase}
                        isActive={isPortfolio}
                        href='/' />
                    <MenuItem 
                        label='SKILLS' 
                        Icon={ImWrench}
                        isActive={isSkills}
                        href='/skills' />
                    <MenuItem 
                        label='ABOUT' 
                        Icon={ImUser}
                        isActive={isAboutPage}
                        href='/about' />
                    <MenuItem 
                        label='CONTACT' 
                        Icon={ImBubble}
                        isActive={isContact}
                        href='/contact' />
				</ul>
			}
		</div>
	);
}

export default Menu;