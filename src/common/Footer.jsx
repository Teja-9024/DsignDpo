import {
  Container,
  Row,
  Col,
  ListGroupItem,
  TabContainer,
} from "react-bootstrap";
import logoa from "../image/logo-white.svg";
import googleimg from "../image/google.svg";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";


export function Footers() {
  return (
    <>
      <div className="footer py-5 mt-5">
        <Container>
          <Row>
            <Col className="col-lg-3 col-sm-6 col-12">
              <img src={logoa} className="img-fluid" />
              <h4 className="text-white py-3">Download Our App </h4>
              <img src={googleimg} className="img-fluid googleimg" />
              <div>
                  <div >
                      {BsFacebook}
                  </div>
                  <div>
                    {AiFillInstagram}
                  </div>
                  <div>
                    {BsTwitter}
                  </div>
              </div>
            </Col>
            <Col className="col-lg-3 col-sm-6 col-12 ">
              <h4 className="text-white pt-3">CATEGORY</h4>
              <ul className="p-0">
                <ListGroupItem className="text-white footerli">
                  Dining Area
                </ListGroupItem>
                <ListGroupItem className="text-white footerli">
                  Living Room Designs
                </ListGroupItem>
                <ListGroupItem className="text-white footerli">
                  Childrens Bedroom Designs
                </ListGroupItem>
                <ListGroupItem className="text-white footerli">
                  Bathroom Design
                </ListGroupItem>
              </ul>
            </Col>
            <Col className="col-lg-3 col-sm-6 col-12">
              <h4 className="text-white">COMPANY</h4>
              <ul className="p-0">
                <ListGroupItem className="text-white footerli">
                  Blog
                </ListGroupItem>
                <ListGroupItem className="text-white footerli">
                  About Us
                </ListGroupItem>
                <ListGroupItem className="text-white footerli">
                  FAQ's
                </ListGroupItem>
                <ListGroupItem className="text-white footerli">
                  Contact Us
                </ListGroupItem>
              </ul>
            </Col>
            <Col className="col-lg-3 col-sm-6 col-12">
              <h4 className="text-white">QUICK LINKS</h4>
              <ul className="p-0">
                <ListGroupItem className="text-white footerli">
                  Privacy Policy
                </ListGroupItem>
                <ListGroupItem className="text-white footerli">
                  Terms and Conditions
                </ListGroupItem>
                <ListGroupItem className="text-white footerli">
                  Refund Policy
                </ListGroupItem>
                <ListGroupItem className="text-white footerli">
                  Bathroom Design
                </ListGroupItem>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className=" footer2 py-4">
        <Container>
          <Row>
            <Col className="col-sm-6 col-12 text-sm-start text-center">
              © 2022 Blue City Studio. All Rights Reserved.
            </Col>
            <Col className="col-sm-6 col-12 text-sm-end text-center">
              © 2022 Blue City Studio. All Rights Reserved.
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
