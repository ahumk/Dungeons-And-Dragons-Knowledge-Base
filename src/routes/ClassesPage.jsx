import { useState, useEffect } from 'react'
import { getData } from '../services/API_Handler'
import Classes from '../components/Classes';

export default function ClassesPage(){

    const [classes, setClasses] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => { 
        setClasses(await getData('classes')); 
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
          <Classes classList={classes?.results} /> 
        </>
    )
}