import React from "react";
import { Nav, NavLink, NavMenu }
from "./navbar_style";

function Navbar() {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/cv" activeStyle>
                        CV
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar