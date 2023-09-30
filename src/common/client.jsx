import { Col, Container, Row } from "react-bootstrap";
import testimonil from "../image/testimonil.jpg";
import coat from "../image/coat.png";
import dcoat from "../image/double-coat.svg";
import Dottade from "../image/dottade.svg";

export function Clints() {
  return (
    <>
		<Container>
		<h2 className="fw-bold py-3 text-center">Happy and Satisfied Clients</h2>
		</Container>
		
      <div className="position-relative client py-5">
	  
	  	<div className="position-relative">
            <img src={Dottade} className="dottad" />
        </div>
        <Container>
              
          <Row>
            <Col className="col-lg-6 col-12 position-relative">
              <img src={testimonil} className="img-fluid" />
              <div className="coat">
                <img src={coat} className="img-fluid " />
              </div>
            </Col>
            <Col className="col-lg-6 col-12 cli">
              <img src={dcoat} className="img-fluid coat1" />
              <h3>Budget Friendly Designs</h3>
              <p>
                With Its Help, I Got All The Interiors Done In My New House. The
                Biggest Thing Was That Along With Every Design, It Also Provides
                Us The List Of Materials To Be Used In It. With This, I Would
                Know In Advance The Budget For Each Furniture And I Decorated My
                New House According To My Budget.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
