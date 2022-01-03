import React from 'react'
import { Link } from 'react-router-dom'
import{Navbar,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap'

function index() {
    return (
        <div>
            <Navbar color="light" light>
                <NavbarBrand href="/">EMMERCE</NavbarBrand>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink >Admin</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default index
