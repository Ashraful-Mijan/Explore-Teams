import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
const Teams = ({team}) => {
    const {strTeamBadge, strTeam, strSport, idTeam} = team;
    return (
        <div className='col-md-4 my-3'>
            <div className="card text-center p-3" >
                <img src={strTeamBadge} className="card-img-top w-50 mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text">Sports Type: {strSport}</p>

                    <Link to={`/team/${idTeam}`} className="btn btn-primary">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Link>

                </div>
            </div>
        </div>
    );
};

export default Teams;