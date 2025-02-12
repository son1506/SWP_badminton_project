import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">Baminton Web</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'>Baminton Web</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/users" className='nav-link'>User</NavLink>
                        <NavLink to="/admins" className='nav-link'>Admin</NavLink>

                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/login">Log in</NavDropdown.Item>
                            <NavDropdown.Item >
                                Log out
                            </NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;