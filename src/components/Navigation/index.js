import React from 'react'
import { Link } from 'react-router-dom'
import{Navbar,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap'
import { useSelector, useDispatch} from 'react-redux' 


function index() {
   const username =  useSelector((state) =>{
        return state.auth.username;
    })

    console.log(`navigation : ${username} `);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">EMMERCE</NavbarBrand>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/manage-product"> 
                            Admin 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/login"> 
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default index
