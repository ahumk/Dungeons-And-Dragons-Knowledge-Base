const baseURL = 'https://www.dnd5eapi.co/api/' //domain name (endpoint acess seperate - se below)

export async function getData(toGet){
    const response = await fetch(baseURL + toGet,
     {
        method: 'GET', //sets the request type, importaint if you want to post, otherwise redundant, as it is 'GET' by default
        headers: {
            'content-type': 'application/json; charset=utf=8', //defines the content-type being used
            'accept': 'application/json' //defines the expected data type of the return data
        }
    })
    .catch( //gets run if an error occurs
        error => { //passes the return value of the catch into the arrow function
            console.error(error) //write out the error to the console
            return error //return the error
        }
    );

    return await response.json(); //awaits response then returns it.
}

//Search function
export async function getSearchItems(){
    const searchOptions = [ //array of objects with the endpoint for the api and type is used for page navigation (fx race/dragonborn)
        { endpoint: 'classes', type: 'class' }, 
        { endpoint: 'races', type: 'race' }, 
        { endpoint: 'ability-scores', type: 'abilityScore' } 
    ] 
    const data = [] //empty array for holding the data

    try { //tries to map searchOptions using goFetch
        searchOptions.map(option => {
            goFetch(option)
        })
        return data
    } catch (error) { //in case the try fails, catch the error
        console.error(error) //write out the error to the console
        return error // Return the error
    }

    async function goFetch(option) {
        fetch(baseURL + option.endpoint, //fetches from the api endpoint 
        {
            method: 'GET', //sets the request type, importaint if you want to post, otherwise redundant, as it is 'GET' by default
            headers: {
                'content-type': 'application/json; charset=utf=8', //defines the content-type being used
                'accept': 'application/json' //defines the expected data type of the return data
            }
        })
        .then(response => { //then we take the response
            return response.json() //then return the response as JSON
        })
        .then(response => { //then we take the JSON respons
            response.results.map(item => { //map the results (of the api response - see postman) we pass the individual objects (now named item)
                data.push( //we now push a new object into the data array
                    { //object with multiple keyvalue pairs
                        index: item.index, 
                        name: item.name,
                        type: option.type //type as the different pages got different types (race, class etc.)
                    }
                )
            })
        })
        .catch(error => { //in case the try fails, catch the error
            console.error(error) //write out the error to the console
            return error //return the error
        });
    }
}