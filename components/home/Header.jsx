
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineSearch,AiOutlineTwitter,AiFillLinkedin,AiFillYoutube } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { BsTelegram } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';
import style from '../../styles/home.module.css';

const Header = () => {

  return (

   <>
    <div>
      {/* aaa collapseOnSelect */}
      <Navbar collapseOnSelect expand="lg"   style={{ padding:'15px 0px',background:'#000', }}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={style.changcolor}/>
       
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className={`${"me-auto"} ${style.backgroundcolor}`}>
           
            <Nav.Link href="#features"  className={style.navfontsize}   style={{ fontSize:'14px',color:'#fff',fontWeight:'500', textTransform: 'uppercase',letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"' }}>ONLINE EDUCATION</Nav.Link>
            <Nav.Link href="#features" className={style.navfontsize}  style={{ fontSize:'14px',color:'#fff',fontWeight:'500', textTransform: 'uppercase',letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"' }}>NIST SCHOOL</Nav.Link>
            <Nav.Link href="#features" className={style.navfontsize}  style={{ fontSize:'14px',color:'#fff',fontWeight:'500', textTransform: 'uppercase',letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"' }}>CONFERENCE</Nav.Link>
            <Nav.Link href="#features" className={style.navfontsize} style={{ fontSize:'14px',color:'#fff',fontWeight:'500', textTransform: 'uppercase',letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"' }}>WANSEE</Nav.Link>
              {/* aaaaa */}
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title={<span  className={style.registration} >REGISTEATION</span>} id="collasible-nav-dropdownn" >    
              <NavDropdown.Item href="#action/3.1">BECOME A STUDENT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                BECOME A INSTRUCTOR
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BECOME A AFFILIATE</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span  className={style.registration} >LOGIN</span>} variant="#fff" id="collasible-nav-dropdownn" style={{ fontSize:'15px',color:'#fff' }}>
              <NavDropdown.Item href="#action/3.1">STUDENT PORTAL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                INSTRUCTOR PORTAL
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FACULTY PORTAL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">AFFILIATE PORTAL</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav> 
            <div className={`${'d-flex'} ${'mt-2'} ${style.header_icon}`}>
              <AiOutlineSearch className={style.searchIcon} style={{ color:'#fff',fontSize:'30px',marginRight:'18px',fontWeight:'900',}}/>
              <GrFacebookOption className={style.facebookIcon} style={{ color:'#fff',fontSize:'17px',marginRight:'16px',fontWeight:'900',marginTop:'5px' }}/>
              <AiOutlineTwitter className='twitterIcon' style={{ color:'#fff',fontSize:'17px',marginRight:'16px',fontWeight:'900',marginTop:'5px' }}/>
              <AiFillLinkedin  className='linkedinIcon' style={{ color:'#fff',fontSize:'17px',marginRight:'16px',fontWeight:'900',marginTop:'5px' }}/>
              <AiFillYoutube  className='youtubeIcon' style={{ color:'#fff',fontSize:'17px',marginRight:'16px',fontWeight:'900',marginTop:'5px' }}/>
              <BsTelegram   className='telegramIcon' style={{ color:'#fff',fontSize:'17px',marginRight:'16px',fontWeight:'900',marginTop:'5px'}}/>
              <BsInstagram className={style.instagram} style={{ color:'#fff',fontSize:'17px',marginRight:'35px',fontWeight:'900',marginTop:'5px'}}/>
              <div style={{ position:'relative' }}>
                <h5 style={{ color:'#fff' }}>$o.oo <MdShoppingCart className='shopIcon' style={{ color:'#fff',fontSize:'17px',}}/></h5>
               <div className="shop_btn" style={{ position:'absolute',color:'#FFF',top:'-10px',right:'-30px',background:'#d45854',padding:'0 5px',borderRadius:'50px',fontSize:'16px',marginRight:'25px'}}>
                     o   
                </div>
              </div>
            </div>
          <Nav.Link href="#features" className={style.blog} style={{ fontSize:'20px',color:'#fff',fontWeight:'500', letterSpacing:'normal',fontFamily:'"Roboto", "sans-serif"',marginLeft:'20px' }}>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   </>
    
  )
}

export default Header