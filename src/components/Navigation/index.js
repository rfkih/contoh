import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
import { useSelector, useDispatch} from 'react-redux' 


function index() {
    const { username, role } = useSelector((state) => {
        return state.auth;
      });

    console.log(`navigation : ${username} `);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">EMMERCE</NavbarBrand>
                <Nav className="me-auto" navbar>
        {username ? (
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              HELLO {username}
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag={Link} to="/cart">
                Cart
              </DropdownItem>
              <DropdownItem tag={Link} to="/history-transaction">
                Transaction
              </DropdownItem>
              {role === "admin" && (
                <DropdownItem tag={Link} to="/manage-products">
                  Admin
                </DropdownItem>
              )}
              <DropdownItem divider />
              <DropdownItem >Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        ) : (
          <>
            <NavItem>
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register">
                Register
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>   


            </Navbar>
        </div>
    )
}

export default index
