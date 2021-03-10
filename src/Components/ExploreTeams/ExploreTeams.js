import React from 'react';
import { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import Teams from '../Teams/Teams';

const ExploreTeams = () => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    // console.log(teams);
    return (
        <>
        {/* <Slides /> */}
        <Banner />
        <section className='bg-dark py-4'>
            <div className="container">
                <div className="row">
                    {
                        teams.map(team =>  <Teams key={team.idTeam} team={team} />)
                    }
                </div>
            </div>
        </section>
        </>
    );
};

export default ExploreTeams;