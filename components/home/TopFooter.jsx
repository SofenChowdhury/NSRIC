import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const TopFooter = () => {
  return (
     <>
     <div className='footer'>
      <Container>
        <style>
            {`
            .footer{
                background:#013767 !important;
                padding-top:30px;
                padding-bottom:10px;
            }
            .foter_text h3{
                color:#fff;
                font-size:30px;
            }
            .foter_text_two h3{
                color:#fff;
                font-size:30px;
            }
    
            `}
        </style>
        <Row>
            <Col sm={12} md={6} lg={4}>
                <div className='foter_text'>
                   <h3>SERVICES</h3>
                   <a href=''>Acquisition and Dissemination of Knowledge (ADK) Division</a>
                   <a href=''>Business Development (BD) Division</a>
                   <a href=''>Online Education (OE) Division</a>
                   <a href=''>Research, Innovation and Development (RID) Division</a>
                   <h3>Contact us</h3>
                </div>
            </Col>
            <Col sm={12} md={6}  lg={2}>
                <div className='foter_text_two '>
                   <h3>JOIN US</h3>
                   <span><a href=''>Affiliate Program</a></span>
                    <span> <a href=''>Faculty</a></span>
                    <span> <a href=''>Instructor</a></span>
                   <a href=''>Marketing Agent</a>
                   <a href=''>NSRIC Member</a>
                   <a href=''>Researcherr</a>
                   <a href=''>Student</a>
                </div>
            </Col>
            <Col sm={12} md={5} lg={3}>
                <div className='foter_text_two'>
                  <div className='footer_text_three'>
                  <h3>ACHIEVEMENTS</h3>
                   <span><a href=''>Affiliate Program</a></span>
                    <span> <a href=''>BOOKS</a></span>
                    <span> <a href=''>PATENTS</a></span>
                    <span> <a href=''>RECENT NEWS</a></span>
                  </div>
                </div>
            </Col>
            {/* <Col sm={1} md={1} lg={1}></Col> */}
            <Col sm={12} md={6} lg={3}>
                <div className='foter_text_two '>
                    <div className='footer_text_three'>
                    <h3>ORGANOGRAM</h3>
                        <span><a href=''>TEAM MEMBERS</a></span>
                        <span><a href=''>PARNERSHIP</a></span>
                        <span><a href=''>BOOK A MEETING</a></span>
                    </div>
                </div>
            </Col>
        </Row>
     
    </Container>
    </div>
     </>
  )
}

export default TopFooter