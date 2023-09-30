import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import tab1 from "../image/tab1.jpg";
import tab2 from "../image/tab2.jpg";
import tab3 from "../image/tab3.jpg";
import tab4 from "../image/tab4.jpg";

export function ExploreTab() {
  return (
    <>
      <div className="Tab bg-white pt-0 mt-0">
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3 tabs Extab"
            justify
          >
			
           
            <Tab eventKey="home" title=" Design" className="tab ">
				<Container>
				<Row className="m-0 ">
                <Col className="col-lg-3 col-sm-4 col-12">
                  <div className="tabimg">
                    <img src={tab1} className="img-fluid" />
                  </div>
                </Col>
                <Col className="col-lg-3 col-sm-4 col-12 ">
                  <div className="tabimg">
                    <img src={tab2} className="img-fluid" />
                  </div>
                </Col>
                <Col className="col-3col-lg-3 col-sm-4 col-12 ">
                  <div className="tabimg">
                    <img src={tab3} className="img-fluid" />
                  </div>
                </Col>
                <Col className="col-lg-3 col-sm-4 col-12 ">
                  <div className="tabimg">
                    <img src={tab4} className="img-fluid" />
                  </div>
                </Col>
                <Col className="col-lg-3 col-sm-4 col-12 ">
                  <div className="tabimg">
                    <img src={tab1} className="img-fluid" />
                  </div>
                </Col>
                <Col className="col-lg-3 col-sm-4 col-12 ">
                  <div className="tabimg">
                    <img src={tab2} className="img-fluid" />
                  </div>
                </Col>
                <Col className="col-lg-3 col-sm-4 col-12 ">
                  <div className="tabimg">
                    <img src={tab3} className="img-fluid" />
                  </div>
                </Col>
                <Col className="col-lg-3 col-sm-4 col-12 ">
                  <div className="tabimg">
                    <img src={tab4} className="img-fluid" />
                  </div>
                </Col>
              </Row>
				</Container>
              
            </Tab>
            <Tab eventKey="profile" title="Bed Design" className="tab">
				<Container>
				   <Row className="m-0">
						<Col className="col-lg-3 col-sm-4 col-12">
						<div className="tabimg">
							<img src={tab1} className="img-fluid" />
						</div>
						</Col>
						<Col className="col-lg-3 col-sm-4 col-12">
						<div className="tabimg">
							<img src={tab2} className="img-fluid" />
						</div>
						</Col>
						<Col className="col-lg-3 col-sm-4 col-12">
						<div className="tabimg">
							<img src={tab3} className="img-fluid" />
						</div>
						</Col>
						<Col className="col-lg-3 col-sm-4 col-12">
						<div className="tabimg">
							<img src={tab4} className="img-fluid" />
						</div>
						</Col>
						<Col className="col-lg-3 col-sm-4 col-12">
						<div className="tabimg">
							<img src={tab1} className="img-fluid" />
						</div>
						</Col>
                   </Row>
				</Container>
             
            </Tab>
            <Tab
              eventKey="longer-tab"
              title=" Wardrobe Designs"
              className="tab"
            >
			  <Container>
				<Row className="m-0">
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab1} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab2} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab3} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab4} className="img-fluid" />
					</div>
					</Col>
				</Row>
			  </Container>
              
            </Tab>
            <Tab eventKey="contact" title=" TV Unit Designs" className="tab">
				<Container>
					<Row className="m-0">
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab1} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab2} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab3} className="img-fluid" />
					</div>
					</Col>
				</Row>
				</Container>
              
            </Tab>
            <Tab
              eventKey="Modular"
              title=" Modular Kitchen Designs"
              className="tab"
            >
				<Container>
					<Row className="m-0">
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab1} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab2} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab3} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab4} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab1} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-3col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab2} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab3} className="img-fluid" />
					</div>
					</Col>
					</Row>
				</Container>
              
            </Tab>
            <Tab eventKey="Bedroom" title=" Bedroom Designs" className="tab">
				<Container>
					<Row className="m-0">
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab1} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab2} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab3} className="img-fluid" />
					</div>
					</Col>
				</Row>
				</Container>
             
            </Tab>
            <Tab
              eventKey="Childrens-tab"
              title="Childrens Bedroom Designs"
              className="tab"
            >
				<Container>
					<Row className="m-0">
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab1} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab2} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab3} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab4} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab1} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab2} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab3} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab4} className="img-fluid" />
					</div>
					</Col>
					</Row>
				</Container>
              
            </Tab>
            <Tab eventKey="Living" title=" Living Room Designs" className="tab">
				<Container>
					<Row className="m-0">
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab1} className="img-fluid" />
					</div>
					</Col>
					<Col className="col-lg-3 col-sm-4 col-12">
					<div className="tabimg">
						<img src={tab2} className="img-fluid" />
					</div>
					</Col>
				</Row>
				</Container>
             
            </Tab>
			

          </Tabs>
       
      </div>
    </>
  );
}
