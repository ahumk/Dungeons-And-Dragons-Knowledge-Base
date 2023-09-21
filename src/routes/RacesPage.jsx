import { useState, useEffect } from 'react'
import { getData } from '../services/API_Handler'
import Races from '../components/Races';

export default function RacesPage(){

    const [races, setRaces] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => { 
        setRaces(await getData('races'));
        setLoading(false)
      }
      fetchData();
    },[]);

    if(loading){
        return(
            <p>Loading...</p>
        )
    }

    return(
        <>
          <Races racesList={races?.results} />
        </>
    )
}