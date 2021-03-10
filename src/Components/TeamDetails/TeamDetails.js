import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../img/male.png'
import female from '../../img/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFlag, faFutbol, faMars, faClock } from '@fortawesome/free-solid-svg-icons'

const TeamDetails = () => {

    const [teamDetails, setTeamDetails] = useState({})

    const { idTeam } = useParams()

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [idTeam]);



    const { strGender, strTeam, strTeamBanner,
        strSport, strCountry, strDescriptionEN,
        strStadiumDescription, intFormedYear,
        strTeamBadge
    } = teamDetails;

    const photo = (strGender === 'Male') ? male : female;

    return (
        <>
            <section className='container-fluid  p-0 m-0'>
                <img className='w-100 h-100' src={strTeamBanner} alt="" />
            </section>
            <section className='bg-dark'>
                <div className="container py-4">
                    <div className="row bg-primary py-4 rounded text-white">
                        <div className="col-md-4 p-5">
                            <h1>{strTeam}</h1>
                            <h5><FontAwesomeIcon icon={faClock} />     Founded: {intFormedYear}</h5>
                            <h5><FontAwesomeIcon icon={faFlag} />     Country: {strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
                            <h5><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                        </div>
                        <div className="col-md-3 pe-5 ">
                            <img className='w-75 pe-5 pt-5' src={strTeamBadge} alt="team logo" />
                        </div>
                        <div className="col-md-5 ">
                            <img src={photo} className='img-fluid' alt="" />
                        </div>
                    </div>

                    <p className='py-3 text-muted'>{strStadiumDescription}</p>
                    <p className='py-2 text-muted'>{strDescriptionEN}</p>

                    {/* <div className='text-center'>
                        <a href='https://web.facebook.com/' rel='noreferrer' target="_blank" className='text-danger px-2'><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href='https://www.youtube.com/' target="_blank" rel='noreferrer' className='text-danger px-2'><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                        <a href='https://twitter.com/?lang=en' target="_blank" rel='noreferrer' className='text-danger px-2'><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    </div> */}
                </div>
            </section>
            
        </>
    );
};

export default TeamDetails;