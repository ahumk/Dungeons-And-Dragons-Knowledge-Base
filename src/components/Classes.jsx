import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@blueprintjs/core"

// Style Imports
import { Card, Elevation } from "@blueprintjs/core";
import { getData } from '../services/API_Handler';

export default function Classes({classList}){

    useEffect(() => {
        const fetchData = async () => {
            getData('/api/classes/')
        }
        fetchData();
      },[]);

    return(
        <section className='main-page'>
            <Card interactive={false} elevation={Elevation.TWO}>
                <h2>Class</h2>
                <p>A character class is a fundamental part of the identity and nature of characters in the Dungeons & Dragons role-playing game. A character's capabilities, strengths, and weaknesses are largely defined by its class. A character's class affects a character's available skills and abilities.</p>
                <div className='card-wrapper'>
                    {classList?.map((item, i) => (
                        <Link key={i} to={'/class/'+item.index}>
                            <Button text={item.name} className="btn-main-page"/>
                        </Link>
                    ))}
                </div>
            </Card>
        </section>
    )
}