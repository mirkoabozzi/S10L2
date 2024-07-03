import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../public/vite.svg";

const MyNav = (props) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          React-EpiBooks!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={() => props.selectCategory("fantasyBooks")}>
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => props.selectCategory("historyBooks")}>
                History
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={() => props.selectCategory("horrorBooks")}>
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" onClick={() => props.selectCategory("romanceBooks")}>
                Romance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" onClick={() => props.selectCategory("scifiBooks")}>
                Scifi
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
