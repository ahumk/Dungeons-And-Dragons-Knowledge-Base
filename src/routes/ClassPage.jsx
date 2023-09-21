import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getData } from '../services/API_Handler';
import { Card, Elevation } from "@blueprintjs/core";

export default function ClassPage(){
    const {className} = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => { 
            
            setData(await getData('classes/'+className))
          
            setLoading(false)
        }
        fetchData();
      },[className]);

      if(loading){ return( <p>Loading...</p> )};

      return(
        <section className='sub-page'>
          <Card interactive={false} elevation={Elevation.TWO}>
            <div className='sub-page-content'>
              <h1>{data.name}</h1>

              <b>Hit die:</b>
              <p>{data.hit_die}</p>

              <ul>
                <b>Proficiency choices:</b>
                  {data?.proficiency_choices.map((info) => (
                    <li key={info.id}>
                      <p>{info.desc}</p>
                    </li>
                    ))
                  }
              </ul>

              <ul>
                <b>Proficiencies:</b>
                  {data?.proficiencies.map((info) => (
                    <li key={info.id}>
                      <p>{info.name}</p>
                    </li>
                    )) 
                  }
              </ul>

              <ul>
                <b>Saving Throws:</b>
                  {data?.saving_throws.map((info) => (
                    <li key={info.id}>
                      <p>{info.name}</p>
                    </li>
                    )) 
                  }
              </ul>

              {data?.starting_equipment?
                <ul>
                  <b>Starting Equipment:</b>
                    {data?.starting_equipment.map((info) => (
                      <li key={info.id}>
                        <p>{info.equipment.name}</p>
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