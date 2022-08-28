import React from 'react'
import PropTypes from 'prop-types'

Home.propTypes = {};
Home.displayName = 'Home';

function Home(props) {
    return (
        <div className='flex flex-1 justify-center items-center'>
            <h1 className='flex flex-col font-semibold text-8xl leading-normal -mt-4'>
                <div className='dark:text-[#aaaaaa]'>Hello.</div>
                <div className='dark:text-white'>I am </div>
                <div className='dark:text-white'>Sri Krishnamoorthi</div>
                <div className='text-2xl text-[#73706D] dark:text-[#797979]'>Front-end Developer</div>
            </h1>
        </div>
    );
}

export default Home;