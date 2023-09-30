import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import weblogo from '../logo.svg'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import crown from '../image/crown.svg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      {['lg'].map((expand) => (
      
        <Navbar key={expand} expand={expand} className="Navbar">
          <Container>
            <Navbar.Brand href="#">
              <img src={weblogo} className='img-fluid logo' />
            </Navbar.Brand>

            <div className='d-flex gap-3 align-items-center'>
           
            <Nav.Link href="#action2" className='fw-bold d-lg-none '>
                      <AiOutlineSearch/>
                  </Nav.Link>
                  <Nav.Link href="#action" className='fw-bold d-lg-none'>
                    <AiOutlineHeart/>
                  </Nav.Link>
                  <Nav.Link href="#action2" className='fw-bold d-lg-none'>
                    <AiOutlineCalendar/>
                  </Nav.Link>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={weblogo} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=''>
                <Nav className="justify-content-start flex-grow-1 pe-3 pt-2">
                <Nav.Link href="#action2" className='fw-bold text-warning ps-3 pt-2 d-block d-lg-none py-3 lg-py-0'>
                      <img src={crown}/>
                  </Nav.Link>
                  <Nav.Link href="#action2" className='fw-bold text-warning menu pt-2 d-block d-lg-none'>Upgrade Pro</Nav.Link>
                  <Link to={'/'} href="#action1" className='menu py-3 lg-py-0'>Home</Link>
                  <Link to={'/About us'} href="#action1" className='menu py-3 lg-py-0'>About Us</Link>
                  <Link to={'/Explor'} href="#action1" className='menu py-3 lg-py-0'>Explore</Link>
                  <Link to={'/Blog'} href="#action1" className='menu py-3 lg-py-0'>Blog</Link>
                  <Link to={'/Contact Us'} href="#action1" className='menu py-3 lg-py-0'>Contact Us</Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                
                  <Nav.Link href="#action2" className='fw-bold navicon menu d-none d-lg-block'>
                      <AiOutlineSearch/>
                  </Nav.Link>
                  <Nav.Link href="#action" className='fw-bold navicon menu d-none d-lg-block'>
                    <AiOutlineHeart/>
                  </Nav.Link>
                  <Nav.Link href="#action2" className='fw-bold navicon menu d-none d-lg-block'>
                    <AiOutlineCalendar/>
                  </Nav.Link>
                  <Nav.Link href="#action2" className='fw-bold text-warning  d-none d-lg-block'>
                      <img src={crown}/>
                  </Nav.Link>
                  <Nav.Link href="#action2" className='fw-bold text-warning menu  d-none d-lg-block'>Upgrade Pro</Nav.Link>
                  <Button variant=" bg-danger text-white fw-bold px-4">Submit</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;