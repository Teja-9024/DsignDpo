import logo from "./logo.svg";
import "./App.css";
import "./Media.css";
import { Container, Nav, Row, Col, Button, Carousel, CarouselItem, Image } from "react-bootstrap";
import Header from "./common/Headers";
import Section1img from "./image/section2img.jpg";
import sec2img2 from "./image/sec2img2.svg";
import Dottade from "./image/dottade.svg";
import sec3img1 from "./image/sec3img1.svg";
import subimage from "./image/subimage_2.jpg";
import subimage_3 from "./image/subimage_3.jpg";
import subimage_icon from "./image/subimage_icon.svg";
import subimage_icon1 from "./image/subimage_icon1.svg";
import icsubimage_4 from "./image/subimage_4.png";
import ubimageicon3 from "./image/ubimageicon3.svg";
import subimage_5 from "./image/subimage_5.jpg";
import titleimage from "./image/titleimage.jpg";
import { Tabing } from "./common/Tabbing";
import { Clints } from "./common/client";
import { Footers } from "./common/Footer";
import slid1 from "./image/slid1.jpg";
import slid2 from "./image/slid2.jpg";
import slid3 from "./image/slid3.jpg";


function App() {
  return (
    <>

      

      <Header />
      <section className="section1">
        <Container>
          <Row>
            <Col className="col-lg-6 col-12 section1_row1">
              Design Your Dream Home... <br />
              At Your Fingertips
              <div>
                <Button className="Explore fw-bold py-3 px-5">
                  Explore More
                </Button>
              </div>
            </Col>
            <Col className="col-lg-6 col-12 rounded">
                <Carousel className="p-lg-5 p-2 rounded">
                    <Carousel.Item >
                      <Image src={slid1} className="img-fluid rounded-5" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image src={slid2} className="img-fluid rounded-5" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image src={slid3} className="img-fluid rounded-5" />
                    </Carousel.Item>
                </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section2 py-5">
        <Container>
          <div className="section2_row1 p-3 bg-white mx-auto rounded my-3">
            Benifits You Get When Using
          </div>
          <Row className="py-5">
            <Col className="col-lg-6 col-12 text-lg-start text-center">
              <img src={Section1img} className="shadow img-fluid" />
            </Col>
            <Col className="col-lg-6 col-12 text-lg-start text-center">
              <div className="mt-5">
                <img src={sec2img2} />
              </div>
              <h3 className="section2_row2 py-lg-2">
                Many Options In All Designs
              </h3>
              <Button className="Explore fw-bold py-3 px-5 my-lg-5 my-1 ">
                Explore More
              </Button>
            </Col>
          </Row>
        </Container>
        <div className="position-relative">
          <img src={Dottade} className="dottade" />
        </div>
      </section>

      <section className="section3 py-lg-5 py-0">
        <Container>
          <Row className="py-lg-5 py-0 flex-column-reverse flex-lg-row">
            <Col className="col-lg-6 col-12 text-lg-end text-center pt-lg-5 pt-0">
              <div className="mt-5  pt-lg-3 pt-0">
                <img src={sec3img1} />
              </div>
              <h3 className="section2_row2 py-lg-2 ps-lg-5 ps-0">
                High Resolution 3D Drawings
              </h3>
              <Button className="Explore fw-bold py-3 px-5 my-lg-5 my-1 ">
                Know More
              </Button>
            </Col>
            <Col className="col-lg-6 col-12 text-lg-start text-center p-lg-5 px-4">
              <img src={subimage} className=" img-fluid  subimage" />
            </Col>
          </Row>
        </Container>
        <div className="position-relative">
          <img src={Dottade} className="dottade2" />
        </div>
      </section>

      <section className="section2 sec-4 py-5">
        <Container>
          <Row className="py-5">
            <Col className="col-lg-6 col-12 text-lg-start text-center px-4">
              <img src={subimage_3} className="shadow img-fluid subimage_3 " />
            </Col>
            <Col className="col-lg-6 col-12 text-lg-start text-center">
              <div className="mt-5">
                <img src={subimage_icon} />
              </div>
              <h3 className="section2_row2 py-lg-2 pe-lg-5 pe-0">
                Many Options In All Designs
              </h3>
              <Button className="Explore fw-bold py-3 px-5 my-lg-5 my-1 ">
                Explore More
              </Button>
            </Col>
          </Row>
        </Container>
        <div className="position-relative">
          <img src={Dottade} className="dottade" />
        </div>
      </section>

      <section className="section3 sec-5 py-lg-5 py-0">
        <Container>
          <Row className="py-lg-5 py-0 flex-column-reverse flex-lg-row">
            <Col className="col-lg-6 col-12 text-lg-end text-center pt-lg-5 pt-0">
              <div className="mt-5  pt-lg-3 pt-0">
                <img src={subimage_icon1} />
              </div>
              <h3 className="section2_row2 py-lg-2 ps-lg-5 ps-0">
                Material List For Cost Calculation Of Furniture
              </h3>
              <Button className="Explore fw-bold py-3 px-5 my-lg-5 my-1 ">
                View More
              </Button>
            </Col>
            <Col className="col-lg-6 col-12 text-lg-start text-center p-lg-5 px-4">
              <img src={icsubimage_4} className=" img-fluid  subimage" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section2 sec-6 py-5">
        <Container>
          <Row className="py-5">
            <Col className="col-lg-6 col-12 text-lg-start text-center px-lg-5 px-3">
              <img src={subimage_5} className="shadow img-fluid subimage_3 " />
            </Col>
            <Col className="col-lg-6 col-12 text-lg-start text-center ps-3">
              <div className="mt-5">
                <img src={ubimageicon3} />
              </div>
              <h3 className="section2_row2 py-lg-2 pe-lg-5 pe-0">
                Get Daily Latest Designs Updates
              </h3>
              <Button className="Explore fw-bold py-3 px-5 my-lg-5 my-1 ">
                View More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section7 pt-5">
        
        <Container className="">
        
          <h2 className="section7_row1 mx-auto p-2">Designs That Define You</h2>
          <div className="text-center">
            <img
              src={titleimage}
              className="titleimage img-fluid p-3 bg-white"
            />
          </div>
        </Container>
      </section>

      <section className="section8"></section>

      <section className="section9">
        <Tabing />
      </section>

      <section className="section10">
        <Clints />
      </section>

      <Footers />
    </>
  );
  
}

export default App;
