import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <h4>React-Portfolio</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/counter">
            Counter
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            E-commerce
          </Nav.Link>
          <Nav.Link as={Link} to="/todo">
          ToDo
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
          Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
export default NavBar;