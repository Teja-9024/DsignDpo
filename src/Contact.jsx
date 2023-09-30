import { Col, Container, Row } from "react-bootstrap";
import { Footers } from "./common/Footer";
import Header from "./common/Headers";
import { AiOutlineMobile } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';

export function Contacts(){
	return(
		<>
			<Header/>
			<Container>
			
				<Row className="py-4">
					<Col className="col-sm-6 col-12 px-4">
					<h2 className="fw-bold ">Contact</h2>
						<div className="py-3 d-flex gap-2">
							<div style={{width:'45px',height:'45px',borderRadius:'50%'}} className="bg-primary text-center">
								<AiOutlineMobile  className="mt-2" style={{color:'white',fontSize:'25px'}}/>
							</div>
							<div>
								<h6>Helpline No</h6>
								<h6>+23783732783</h6>
							</div>
							
						</div>
						<div className="py-3 d-flex gap-2">
							<div style={{width:'45px',height:'45px',borderRadius:'50%'}} className="bg-primary text-center">
								<AiOutlineMail  className="mt-2" style={{color:'white',fontSize:'25px'}}/>
							</div>
							<div>
								<h6>Email:</h6>
								<h6>info@gfjfjfj.com</h6>
							</div>
							
						</div>
						<div className="py-3 d-flex ">
							<div style={{width:'45px',height:'45px',borderRadius:'50%'}} className="bg-primary text-center">
								<FaLocationDot  className="mt-2" style={{color:'white',fontSize:'25px'}}/>
							</div>
							<div className="px-2"> 
								<h6>Address:</h6>
								<h6 >14/15, Sector 14, Chopasni Housing Board,<br/> 
									Jodhpur, Rajasthan 342001</h6>
							</div>
							
						</div>
						
					</Col>
					<Col className="col-sm-6 col-12">
						<div className="shadow-lg bg-white p-4">
							<h5>Have a Question?</h5>
							<h6>Write To Us!</h6>
							<div className="form-wrap">	
								<form id="survey-form">
									<Row className="py-2">
										<Col className="col-lg-6 col-12 py-1">
											<div className="form-group">
												<input type="text" name="name" id="name" placeholder="Enter your name" className="form-control" required/>
											</div>
										</Col>
										<Col className="col-lg-6 col-12 py-1">
											<div className="form-group">
												<input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" required/>
											</div>
										</Col>
									</Row>
									<Row className=" py-2">
										<Col className="col-lg-6 col-12 py-1">
											<div className="form-group">
												<input type="text" name="name" id="name" placeholder="Enter your name" className="form-control" required/>
											</div>
										</Col>
										<Col className="col-lg-6 col-12 py-1">
											<div className="form-group">
												<input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" required/>
											</div>
										</Col>
									</Row>
									
									
									<Row className=" py-1">
										<Col className="col-md-12">
											<div className="form-group">
												<label className="ps-2">Message</label>
												<textarea  id="comments" className="form-control" name="comment" placeholder="Enter your comment here..."></textarea>
											</div>
										</Col>
									</Row>
									
									<Row className="row py-1">
										<Col className="col-md-4">
											<button type="submit" id="submit" className="btn btn-primary btn-block">Submit</button>
										</Col>
									</Row>

								</form>
							</div>	
						</div>
					</Col>
				</Row>
			</Container>
			
			<Footers/>
		</>
	)
}