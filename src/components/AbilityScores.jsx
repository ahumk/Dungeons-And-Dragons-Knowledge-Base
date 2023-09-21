import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@blueprintjs/core"

// Style Imports
import { Card, Elevation } from "@blueprintjs/core";
import { getData } from '../services/API_Handler';

export default function AbilityScores({abilityScores}){

    useEffect(() => {
        const fetchData = async () => { 
            getData('/api/ability-scores/') 
        }
        fetchData();
      },[]);

    return(
        <section className='main-page'>
            <Card interactive={false} elevation={Elevation.TWO}>
                <h2>Ability Score</h2>
                <p>Represents one of the six abilities that describes a creature's physical and mental characteristics. 
                    The three main rolls of the game - the ability check, the saving throw, and the attack roll - rely on the ability scores.</p>
                <div className='card-wrapper'>
                    {abilityScores?.map((item, i) => (
                        <Link key={i} to={'/abilityScore/'+item.index}>
                            <Button text={item.name} className="btn-main-page"/>
                        </Link>
                    ))}
                </div>
            </Card>
        </section>
    )
}