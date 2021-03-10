import React from 'react';
import SocialIcon from '../SocialIcon/SocialIcon';

const Footer = () => {
    return (
        <section className='bg-dark p-3'>
            <div className="container text-center">
                <SocialIcon />
                <p className="text-muted fw-normal">
                    Copyright © ExploreTeams. All Rights Reserved
                </p>
            </div>
        </section>
    );
};

export default Footer;