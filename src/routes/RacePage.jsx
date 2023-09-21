import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getData } from '../services/API_Handler';
import { Card, Elevation } from "@blueprintjs/core";

export default function RacePage(){
    const {raceName} = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {  
            setData(await getData('races/'+raceName))
            setLoading(false)
        }
        fetchData();
      },[raceName]);

      if(loading){ return( <p>Loading...</p> )};

      return(
        <section className='sub-page'>
          <Card interactive={false} elevation={Elevation.TWO}>
            <div className='sub-page-content'>
                <h1>{data.name}</h1>

                <b>Speed:</b>
                <p>{data.speed}</p>

                <ul>
                    <b>Ability Bonuses:</b>
                    {data?.ability_bonuses.map((info) => (
                    <li key={info.id}>
                        <p>{info.ability_score.name}</p>
                    </li>
                    ))
                    }
                </ul>
                
                <b>Alignment:</b>
                <p>{data.alignment}</p>

                <b>Age:</b>
                <p>{data.age}</p>

                <b>Size:</b>
                <p>{data.size}</p>

                <b>Size Description:</b>
                <p>{data.size_description}</p>

                {data?.starting_proficiency? 
                    <ul>
                        <b>Starting Proficiencies:</b>
                        {data?.starting_proficiencies.map((info) => (
                        <li key={info.id}>
                            <p>{info.name}</p>
                        </li>
                        ))
                        }
                    </ul>:
                null
                }
                
                {data?.starting_proficiency_options? 
                    <ul>
                        <b>Starting Proficiencies Options:</b>
                        <p>{data?.starting_proficiency_options.desc}</p>
                    </ul>:
                null
                }

                <ul>
                    <b>Languages:</b>
                    {data?.languages.map((info) => (
                    <li key={info.id}>
                        <p>{info.name}</p>
                    </li>
                    ))
                    }
                </ul>

                <b>Language Description :</b>
                <p>{data.language_desc}</p>

                <ul>
                <b>Traits:</b>
                    {data?.traits.map((info) => (
                    <li key={info.id}>
                        <p>{info.name}</p>
                    </li>
                    ))
                    }
                </ul>

                {data?.subraces?  
                    <ul>
                        <b>Subraces:</b>
                            {data?.subraces.map((info) => (
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