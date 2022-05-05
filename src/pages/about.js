import React from 'react'
import PropTypes from 'prop-types'

const introduction = 'I am Sri Krishnamoorthi, UI developer with around 6 years of industry experience. Currently, working at NetApp. I \
    primarily use React, HTML, CSS, Javascript, node to create perfomant UI';

About.propTypes = {};
About.displayName = 'About';

function About(props) {
    return (
        <div className='dark:text-white text-black p-8'>
            {introduction}
        </div>
    )
}

export default About;