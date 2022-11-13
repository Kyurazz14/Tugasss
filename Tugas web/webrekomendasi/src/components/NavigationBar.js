import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">PLAYCLONE</Navbar.Brand>
                <Nav>
                <Nav.Link href="trending">Trending</Nav.Link>
                <NavDropdown title="Rekomendasi" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Kartu</NavDropdown.Item>
                     <NavDropdown.Item href="#action4">
                             Arcade
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                              Balap
                     </NavDropdown.Item>
                    </NavDropdown>
                    <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar