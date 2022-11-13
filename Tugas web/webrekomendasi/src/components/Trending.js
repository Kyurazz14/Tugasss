import { Container, Row, Col, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import domino from '../assets/image/Games/domino.png'
import pubg from '../assets/image/Games/PUBG.png'
import gi from '../assets/image/Games/gansine impact.png'
import ml from '../assets/image/BG/ml.png'

const Trending = () => {
return (
  <div>
    <Container>
      <br />
      <h1 className="text-white">GAME TRENDING</h1>
      <br />
      <Row>
        <Col md={3} className="gamesWrapper "id="Trending">
        <Card className="gamesRekomendasi">
  <Image src={domino}  alt="dune" />
  <div className="bg-dark">
    <div className="p-2 m-1 text-white">
    <Card.Title className="text-center">Domino</Card.Title>
    <Card.Text className="text-left">
    lorem ipsumdasasd ahsdjsacd saydc asjdyvs jdsyavdas
    </Card.Text>
    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
  </div>
  </div>
</Card>
        </Col>
        <Col md={3} className="gamesWrapper" >
        <Card className="gamesRekomendasi">
  <Image src={pubg}  alt="dune" />
  <div className="bg-dark">
    <div className="p-2 m-1 text-white">
    <Card.Title className=" text-center">PUBG Mobile</Card.Title>
    <Card.Text className="text-left">
    lorem ipsumdasasd ahsdjsacd saydc asjdyvs jdsyavdas
    </Card.Text>
    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
  </div>
  </div>
</Card>
        </Col>

        <Col md={3} className="gamesWrapper" >
        <Card className="gamesRekomendasi">
  <Image src={gi}  alt="dune" />
  <div className="bg-dark">
    <div className=" text-white">
    <Card.Title className="p-2 m-1 text-center">Gansine Impact</Card.Title>
    <Card.Text className="text-left">
    lorem ipsumdasasd ahsdjsacd saydc asjdyvs jdsyavdas
    </Card.Text>
    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
  </div>
  </div>
</Card>
        </Col>

        <Col md={3} className="gamesWrapper" >
        <Card className="gamesRekomendasi">
  <Image src={ml}  alt="dune" />
  <div className="bg-dark">
    <div className=" text-white">
    <Card.Title className="p-2 m-1 text-center">Mobile Legend</Card.Title>
    <Card.Text className="text-left">
      lorem ipsumdasasd ahsdjsacd saydc asjdyvs jdsyavdas
    </Card.Text>
    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
  </div>
  </div>
</Card>
        </Col>
        

      </Row>
    </Container>
  
</div>
    );
  }


export default Trending