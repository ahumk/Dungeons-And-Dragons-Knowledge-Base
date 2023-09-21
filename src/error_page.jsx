import { useRouteError } from 'react-router-dom';

export default function ErrorPage(){
    const error = useRouteError(); // sets error to the route error from react router
    console.error(error); // outputs the error to the console

    return(
        <div>
             <h1>{error.status || ''} - {error.statusText || error.message }</h1> {/* Displays the error on the page */}
        </div>
    )
};