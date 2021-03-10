import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
const SocialIcon = () => {
    return (
        <div className='text-center pb-3'>
            <a href='https://web.facebook.com/' rel='noreferrer' target="_blank" className='text-danger px-2'><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href='https://www.youtube.com/' target="_blank" rel='noreferrer' className='text-danger px-2'><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
            <a href='https://twitter.com/?lang=en' target="_blank" rel='noreferrer' className='text-danger px-2'><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        </div>
    );
};

export default SocialIcon;