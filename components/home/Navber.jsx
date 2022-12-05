
import {  useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import style from '../../styles/home.module.css';
const Navber = () => {
let [fix,setFix] = useState(false);

let topFixed = ()=>{
   if(window.scrollY){
    setFix(true);
   }else{
    setFix(false);
   }
}
if (typeof window !== 'undefined') {
  window.addEventListener("scroll",topFixed);
}
  return (
   <>
   <style jsx>
    {`
   
   
    .fixed_top{
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 0;
    z-index:99999;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    background: #fff;
    }
  
   
    `}
   </style>
  <div className={fix ? "fixed_top": ""}> 
    <Navbar   collapseOnSelect expand="lg"   style={{ padding:'15px 0px',borderBottom:'1px solid #999999'}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav"   className={style.changcolor}>
          <Nav className={`${"me-auto"} ${style.backgroundcolornav}`} >

            <Nav.Link ><Link style={{ fontSize:'17px',color:'#000',fontWeight:'500', textTransform: 'uppercase',letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"',textDecoration:'none' }} href="/" >Home</Link></Nav.Link>

            <Nav.Link  ><Link style={{ fontSize:'17px',color:'#000',fontWeight:'500', textTransform: 'uppercase',letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"',textDecoration:'none' }} href="/about" >ABOUT US</Link></Nav.Link>

           <Dropdown >
            <Dropdown.Toggle variant="" className={style.service_dropdown} id="dropdown-basic" style={{ fontSize:'17px',color:'#000',fontWeight:'500', textTransform: 'uppercase',letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"' }}>
              service
            </Dropdown.Toggle>

            <Dropdown.Menu className='hoverkaka'>
              <Dropdown.Item href="#/action-1" >ACQUISITION AND DISSEMINATION OF KNOWLEDGE (ADK) DIVISION
               </Dropdown.Item>
              <Dropdown.Item href="#/action-2">BUSINESS DEVELOPMENT (BD) DIVISION</Dropdown.Item>
              <Dropdown.Item href="#/action-3">CYBERSECURITY SERVICE (CS) DIVISION</Dropdown.Item>
              <Dropdown.Item href="#/action-3">ONLINE EDUCATION (OE) DIVISION</Dropdown.Item>
              <Dropdown.Item href="#/action-3">RESEARCH, INNOVATION AND DEVELOPMENT (RID) DIVISION</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

            <NavDropdown title="E-COURSES" variant="#000" id="collasible-nav-dropdown" style={{ fontSize:'15px',color:'#000' }}>
              <NavDropdown.Item href="#action/3.1">ONLINE COURSES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                CLASSIFICATION OF COURSES
              </NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="STUDENTS" variant="#000"  id="collasible-nav-dropdown"  style={{ fontSize:'15px',color:'#000' }}>
              <NavDropdown.Item href="#action/3.1">WHY CHOOSE NSRIC?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                STUDENT REGISTRATION
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PROGRAMS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">K12 SCHOOL- NIST</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#features"  style={{ fontSize:'17px',color:'#000',fontWeight:'500', textTransform: 'uppercase',letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"' }}>TEAM MEMBERS</Nav.Link>

            <Nav.Link href="#features"  style={{ fontSize:'17px',color:'#000',fontWeight:'500', textTransform: 'uppercase',letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"' }}>BLOG</Nav.Link>
 
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
   </>
    
  )
}

export default Navber