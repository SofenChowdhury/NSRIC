import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Footer = () => {
    return (
        <>
        <div className='footer1 '>
         <Container>
           <style jsx>
               {`
              
               .foter_text h3{
                   color:#fff;
                   font-size:30px;
               }
               .foter_text_two h3{
                   color:#fff;
                   font-size:30px;
               }
               .contact_form input{
                width:100%;
                padding:10px 0px;
                border:none;
                outline-width: 0px;
               }
               .contact_button button{
                background:#242656;
                width:100%;
                padding:10px 0px;
                border:none;
               }
               .terms_condition p{
                color:#fff;
                font-size:15px;
               }
               .terms_condition a{
                color:#fff;
                font-size:15px;
               }
               .terms_condition{
                border-top:1px solid #555;
                padding-top:20px
               }
       
               `}
           </style>
           <Row>
               <Col sm={12} md={6} lg={4}> 
                   <div className='foter_text'>
                      <h3>About us</h3>
                      <p>NSRIC Inc. (Nature Science Research and Innovation Centre) is a Canadian registered incorporated company based in London, ON, Canada. It was established in St. John’s, Newfoundland and Labrador (NL), Canada as ANS Research and Development Ltd. </p>
                   </div>
               </Col>
               <Col sm={12} md={6} lg={3}>
                   <div className='foter_text_two '>
                      <h3>Corporate office</h3>
                      <div><CiLocationOn className="text-white" style={{ fontSize:'30px' }}/> <span style={{ fontSize:'15px',color:'#fff' }}>Location:</span>
                      <p className='ml-5' style={{ marginLeft:'30px',color:'#fff' }}>London, Ontario, Canada</p>
                      </div>
                      <div><MdOutlineEmail className="text-white" style={{ fontSize:'30px' }}/> <span style={{ fontSize:'15px',color:'#fff' }}>E-mail:</span>
                      <p className='ml-5' style={{ marginLeft:'30px',color:'#fff' }}>info@nsric.ca</p>
                      </div>
                   </div>
               </Col>
               <Col sm={12} md={12} lg={5}>
                   <div className='foter_text_two'>
                     <div className='footer_text_three'>
                     <h3>Contact us</h3>
                        <form action="" method='POST'>
                            <div className="mt-3 contact_form">
                                <input type="text"  placeholder="Name" style={{ paddingLeft:'10px', }} />
                            </div>
                            <div className="mt-3 contact_form">
                                <input type="text"  placeholder="Phone" style={{ paddingLeft:'10px', }} />
                            </div>
                            <div className="mt-3 contact_form">
                                <input type="text"  placeholder="Email" style={{ paddingLeft:'10px', }} />
                            </div>
                            <div className="mt-3 contact_form">
                                <input type="text"  placeholder="Massage" style={{ paddingLeft:'10px', }} />
                            </div>
                            <div className="mt-3 contact_form text-center">
                               <div  className="contact_button">
                                 <button className='text-white '>Submit</button>
                               </div>
                            </div>
                        </form>
                     </div>
                   </div>
               </Col>
               <Col sm={1} lg={1}></Col>
           </Row>
           <Row>
              <div className='d-flex justify-content-between terms_condition mt-5 '>
                <div>
                    <p >All right reserved. NSRIC Inc. Designed and Developed by <a href=""> Aniya Network Solutions LTD.</a>  </p>
                </div>
                <div className='d-flex  justify-content-end footer_privacy'>
                    <div>
                        <a href="">Tears & condition</a>
                    </div>
                    <div>
                        <a href=""  className='m-3'>Special</a>
                    </div>
                    <div>
                        <a href=""  className='m-3'>Privaci policy</a>
                    </div>
                   
                </div>
              </div>
           </Row>
       </Container>
       </div>
        </>
     )
}

export default Footer