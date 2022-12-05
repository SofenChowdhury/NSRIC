import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from '../../styles/home.module.css';
const Logo = () => {
  return (
    <>
     <div className='menu_head' style={{ background:'#fff',padding:'15px 0px',borderBottom:'1px solid #999999' }}>
     <Container>
      <Row>
        <Col sm={12} md={3} lg={3}>
            <div className={`text-center mt-5 `}>
                <h3 style={{ color:'#000000',fontSize:'19px',fontWeight:'500',lineHeight:'13px' }}>NSRIC Time</h3>
                <h4 style={{ color:'#000000',fontSize:'17px',lineHeight:'.0',fontWeight:'500',lineHeight:'13px' }}>(EST-Toronto Time)</h4>
                <h5 style={{ color:'#000000',fontSize:'20px',paddingTop:'10px',lineHeight:'20px',fontWeight:'700'  }}>03 : 49 : 49 AM</h5>
            </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
            <div  className='bringing text-center'>
                <div className='text-center'>
                    <picture className={style.logo_img}>
                        <img width="350" src="images/logo.png" alt="" />
                    </picture>
                </div> 
                <h4  style={{ color:'#000000', fontSize:'19px',lineHeight:'25px',marginTop:'4px',marginBottom:'-64px',fontWeight:'400',textAlign:'center' }}>Bringing people together through knowledge dissemination</h4>
                 
            </div>
        </Col>
        <Col sm={12} md={3} lg={3}>
           <div className='text-center mt-5 '>
                <div className={style.local_time}>
                  <h3 style={{ color:'#000000',fontSize:'20px',fontWeight:500 }}>Local Time</h3>
                <h5 style={{ color:'#000000',fontSize:'20px',paddingTop:'5px',lineHeight:'0',fontWeight:'700' }}>03 : 49 : 49 AM</h5>
                </div>
            </div>
        </Col>
        
      </Row>
      <Row className='mt-5'>

      </Row>
    </Container>
    </div>
    </>
  )
}

export default Logo