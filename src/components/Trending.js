import { Card, Container, Row, Col, Image } from "react-bootstrap"
import threeFiveFiveImage from "../assets/images/card/355.jpg"
import moneyHeist from "../assets/images/card/Moneyheist.jpg"
import eternals from "../assets/images/card/Eternals.jpg"
import geezAnn from "../assets/images/card/Geezann.jpg"

const Trending = () => {
    return (
        <div>
          <Container>
            <Row>
              <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={threeFiveFiveImage} alt="Image 355" className="image"/>
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">355</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural. This content is a little bit longer.
                      </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
                </Card>
              </Col>
              <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={moneyHeist} alt="Image 355" className="image"/>
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">355</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural. This content is a little bit longer.
                      </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
                </Card>
              </Col>
              <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={eternals} alt="Image 355" className="image"/>
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">355</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural. This content is a little bit longer.
                      </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
                </Card>
              </Col>
              <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={geezAnn} alt="Image 355" className="image"/>
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">355</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural. This content is a little bit longer.
                      </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
                </Card>
              </Col>
              <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={eternals} alt="Image 355" className="image"/>
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">355</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural. This content is a little bit longer.
                      </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
                </Card>
              </Col>
              <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={eternals} alt="Image 355" className="image"/>
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">355</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural. This content is a little bit longer.
                      </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Trending