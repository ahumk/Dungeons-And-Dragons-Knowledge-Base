import { useState, useEffect } from 'react'
import { getData } from '../services/API_Handler'
import AbilityScores from '../components/AbilityScores';

export default function AbilityScoresPage(){

    const [abilityScores, setAbilityScores] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => { //loads async (checks later if it is in the order you want)
        setAbilityScores(await getData('ability-scores')); //awaits the data from getData and sets data to the return value
        setLoading(false)
      }
      fetchData();
    },[]);//dependency array [] tells react that this useeffects only need to run once, when the component is ready

    if(loading){
        return(
            <p>Loading...</p>
        )
    }

    return(
        <>
          <AbilityScores abilityScores={abilityScores?.results} />
        </>
    )
}