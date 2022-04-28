import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
      <div>
        <Navbar variant="dark">
            <Container>
               <Navbar.Brand href="/">Kiki Movies</Navbar.Brand>
               <Nav>
                <Nav.Link href="#trending">Trending</Nav.Link>
                <Nav.Link href="#characters">Characters</Nav.Link>
               </Nav>
            </Container>
        </Navbar>
      </div>
    )
}

export default NavigationBar