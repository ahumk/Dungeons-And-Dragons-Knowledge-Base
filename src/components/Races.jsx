import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@blueprintjs/core"

// Style Imports
import { Card, Elevation } from "@blueprintjs/core";
import { getData } from '../services/API_Handler';

export default function Races({racesList}){

    useEffect(() => {
        const fetchData = async () => { 
            getData('/api/races/') 
        }
        fetchData();
      },[]);

    return(
        <section className='main-page'>
            <Card interactive={false} elevation={Elevation.TWO}>
                <h2>Races</h2>
                <p>Each race grants your character ability and skill bonuses as well as racial traits.</p>
                <div className='card-wrapper'>
                    {racesList?.map((item, i) => (
                        <Link key={i} to={'/race/'+item.index}>
                            <Button text={item.name} className="btn-main-page"/>
                        </Link>
                    ))}
                </div>
            </Card>
        </section>
    )
}