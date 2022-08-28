import React from 'react';
import PropTypes from 'prop-types';
import ReactIcon from '../../styles/img/react.svg';
import HTMLIcon from '../../styles/img/html.svg';
import CSSIcon from '../../styles/img/css.svg';
import JavascriptIcon from '../../styles/img/javascript.svg';
import NodeIcon from '../../styles/img/nodejs.svg';
import ReduxIcon from '../../styles/img/redux.svg';
import TailwindIcon from '../../styles/img/tailwind.svg';

Skills.propTypes = {};
Skills.displayName = 'Skills';

function Skills(props) {
    return (
        <div className='text-xl pt-8'>
            <div className='text-7xl py-12 font-semibold flex text-center dark:text-white'>
                Learning is a never ending journey!
            </div>
            <div className='pt-4'>
                Some of the technologies that I use primarily are 
            </div>
            <div className='pt-8 flex justify-start flex-wrap gap-x-12 gap-y-16'>
                <SkillItem icon={JavascriptIcon} name='JavaScript'/>
                <SkillItem icon={ReactIcon} name='React'/>
                <SkillItem icon={HTMLIcon} name='HTML'/>
                <SkillItem icon={CSSIcon} name='CSS'/>
                <SkillItem icon={ReduxIcon} name='Redux'/>
                <SkillItem icon={NodeIcon} name='Node JS'/>
                <SkillItem icon={TailwindIcon} name='tailwindcss'/>
                <div className='self-end'>and much more...</div>
            </div>
        </div>
    )
}

export default Skills;

function SkillItem({ icon = '', name = ''}) {
    return (
        <div className='flex flex-nowrap items-end w-80'>
            {icon && <img src={icon} className='h-12 w-12 mr-4' /> }
            <div className='text-4xl font-normal'>{name}</div>
        </div>
    );
}