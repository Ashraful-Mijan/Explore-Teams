import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../img/male.png'
import female from '../../img/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

    const photoGender = ( strGender === 'Female') ? female : male;

    return (
        <>
            <section className='container-fluid  p-0 m-0'>
                <img className='w-100 h-100' src={strTeamBanner} alt="" />
            </section>
            <section className='bg-dark'>
                <div className="container py-4">
                    <div className="row bg-light py-4 rounded text-white">
                        <div className="col-md-4 py-5 ps-5 pe-0 text-dark">
                            <h1>{strTeam}</h1>
                            <h5><FontAwesomeIcon icon={faClock} />     Founded: {intFormedYear}</h5>
                            <h5><FontAwesomeIcon icon={faFlag} />     Country: {strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
                            <h5><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                        </div>
                        <div className="col-md-4 p-3">
                            <img className='w-75 p-5' src={strTeamBadge} alt="team logo" />
                        </div>
                        <div className="col-md-4 py-5 pe-5">
                            <img src={photoGender} className='img-fluid' alt="" />
                        </div>
                    </div>

                    <p className='py-3 text-muted'>{strStadiumDescription}</p>
                    <p className='py-2 text-muted'>{strDescriptionEN}</p>

                </div>
            </section>
            
        </>
    );
};

export default TeamDetails;