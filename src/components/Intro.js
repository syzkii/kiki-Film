import {Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white d-flex justify-content-center text-center align-items-center">
            <Row>
              <Col>
                <div className="title">Nonton Sepuasnya!</div>
                <div className="title">Tanpa Takut kena BAN!</div>
                <div className="introButton mt-4">
                    <Button variant="dark">Lihat lebih lanjut!</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro

