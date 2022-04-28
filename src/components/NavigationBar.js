import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
      <div>
        <Navbar variant="dark">
            <Container>
               <Navbar.Brand>Kiki Films</Navbar.Brand>
               <Nav>
                <Nav.Link>Trending</Nav.Link>
                <Nav.Link>Characters</Nav.Link>
               </Nav>
            </Container>
        </Navbar>
      </div>
    )
}

export default NavigationBar