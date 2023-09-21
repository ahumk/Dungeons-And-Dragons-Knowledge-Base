import { Link } from "react-router-dom"
import SearchField from "./searchField/SearchField";

import { Navbar, Button, Alignment } from "@blueprintjs/core"
import "../styles/nav.scss"

export default function Nav(){

    return(
        <Navbar id="nav">
            <Navbar.Group>
                <Navbar.Heading>
                    <Link to='/home'>
                        <img src="/src/assets/icons/dnd-icon.png" alt="D&D Logo" id="nav-logo"></img>
                    </Link>
                </Navbar.Heading>
                <Navbar.Divider className="divider" />
            </Navbar.Group>

            <Navbar.Group id="nav-links">
                <Link to='/home' className="nav-btn">
                    <Button className="bp5-minimal" text="Home" />
                </Link>
                <Link to='/abilityScores'className="nav-btn">
                    <Button className="bp5-minimal" text="AbilityScore" />
                </Link>
                <Link to='/races'className="nav-btn">
                    <Button className="bp5-minimal" text="Races" />
                </Link>
                <Link to='/classes'className="nav-btn">
                    <Button className="bp5-minimal" text="Classes" />
                </Link>
            </Navbar.Group>

            <Navbar.Group >
                <Navbar.Divider className="divider" />
                <SearchField />
            </Navbar.Group>
        </Navbar>
    )
}