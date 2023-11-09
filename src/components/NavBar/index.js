import React from "react";
import { Nav, NavLink, NavMenu }
    from "./navbar";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/cv" activeStyle>
                        CV
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;