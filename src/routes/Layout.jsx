import { Outlet } from 'react-router-dom'; //enables the Users component to render its child routes.
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Layout(){
    if (location.pathname === '/'){ //if the path is '/' then go to Home
        location.pathname = '/Home'
    }
    
    return(
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
};