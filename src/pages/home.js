import React from 'react'
import PropTypes from 'prop-types'

Home.propTypes = {};
Home.displayName = 'Home';

function Home(props) {
    return (
        <div className='flex flex-1 justify-center items-center'>
            <h1 className='flex flex-col font-semibold text-8xl leading-normal -mt-4'>
                <div className='text-black dark:text-white'>Hello.</div>
                <div className='text-[#ea0f1e]'>I am </div>
                <div className='text-[#ea0f1e]'>Sri Krishnamoorthi</div>
            </h1>
        </div>
    );
}

export default Home;
