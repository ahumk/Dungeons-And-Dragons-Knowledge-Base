import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getData } from '../services/API_Handler';
import { Card, Elevation } from "@blueprintjs/core";

export default function abilityScorePage(){
    const {abilityScoreName} = useParams();// gets the URL Parametre and stores it
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => { //loads async - checks later if it is in the order you want
            setData(await getData('ability-scores/'+abilityScoreName)) //awaits the data from getData and sets data to the return value
            setLoading(false)// sets loading to false so the page no longer return 'Loading...'
        }
        fetchData();
      },[abilityScoreName]);//dependency array [] tells react that this useeffects only need to run once, when the component is ready

      if(loading){ return( <p>Loading...</p> )};

      return(
        <section className='sub-page'>
          <Card interactive={false} elevation={Elevation.TWO}>
            <div abilityScoreName='sub-page-content'>
              <h1>{data.name}</h1>

              <b>Full Name:</b>
              <p>{data.full_name}</p>

              <br />
              
              <b>Description:</b>
              <p>{data.desc}</p>

            {data?.skills?  
              <ul>
                <b>Skills:</b>
                  {data?.skills.map((info) => (
                    <li key={info.id}>
                      <p>{info.name}</p>
                    </li>
                    ))
                  }
              </ul>:
              null
            }
            </div>
          </Card>
        </section>
      );
}