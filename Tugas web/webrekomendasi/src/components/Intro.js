import { Col, Container, Row } from 'react-bootstrap';

const intro = () => {
    return (
        <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center ">
          <Row>
            <Col>
            <br />
            <br />
            <br />
            <br />
            <div className="title">Populer Banget</div>
            <div className="title">Minggu ini</div>
            <div className="introButton mt-4 text-center">
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default intro
