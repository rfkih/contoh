import React from 'react'
import { Link } from 'react-router-dom'
import{Navbar,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap'


function index() {
    return (
        <div>
            <Navbar color="light" light>
                <NavbarBrand tag={Link} to="/">EMMERCE</NavbarBrand>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/manage-product"> 
                            `Manage Product 
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default index
