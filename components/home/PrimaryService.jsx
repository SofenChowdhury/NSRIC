import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import style from '../../styles/home.module.css';
const PrimaryService = () => {
  return (
       <div className='primary_service'>
          <Container>
            <style>
              {`
              .primary_service{
                background:#efefef;
              }
              .primary_service_head{
                position: relative;
              }
              .primary_service_head::after{
                position: absolute;
                width:400px;
                height:2px;
                content: '';
                background: #000;
                top: 40px;
                left:10px;
              }
              .primary_service_head::before{
                position: absolute;
                width:400px;
                height:2px;
                content: '';
                background: #000;
                top: 40px;
                right:10px;
              }
              .privacy_img img{
                width:200px;
              }
              .primary_item_text{
                width:70%;
              }
              .primary_item_text h4{
                color: #1A5DC8;
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
              }
              .primary_item_text p{
                color: #000;
                font-size: 15px;
                font-weight: 400;
                line-height: 28px;
                text-align: justify;
              }
              .primary_all_division_item h3{
                color: #1A5DC8;
                font-size: 25px;
                font-weight: 400;
                line-height: 28px;
              }
              .primary_all_division_item h4{
                color: #1A5DC8;
                font-size: 20px;
                font-weight: 400;
                line-height: 28px;
              }
              .primary_all_division_item p{
                color: #000;
                font-size: 17px;
                font-weight: 400;
                line-height: 28px; 
              }
             
              `}
            </style>
            {/* Primary service img and text */}
            <Row className='text-center '>
              <div className={style.primary_service_head}>
              <p style={{ background:'#DCDAF5',marginBottom:'33px',padding:'15px',color:'#000',fontSize:'30px',fontWeight:'600' }}>Our Primary Services</p>
              </div>
                
            </Row>
            <Row>
              <Col sm={12} md={12} lg={7}>
                <div className='primary_item d-flex mt-2 mb-2' style={{background:'#e4e4f0'}} >
                  <div className='privacy_img'>
                    <img src="images/rid.png" alt="" className='img-fluid'/>
                  </div>
                  <div className='primary_item_text ms-2'>
                           <h4 className='mb-3' > Research , Innovation And Development Division</h4>
             <p>The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the research and innovation services to the interested individuals, commercial organizations, industry, institutions and research centres through our dedicated team members with diversified experiences and talents. For more information, please visit our NSRIC RID platform. or contact at info@nsric.ca.</p>
                  </div>
                </div>
              </Col>
               <Col sm={12} md={12} lg={5}>
                <div className='primary_item d-flex mt-2 mb-2' style={{background:'#e4e4f0'}}>
                  <div className='privacy_img'>
                    <img src="images/icon_tow.png" alt="" className='img-fluid'/>
                  </div>
                  <div className='primary_item_text ms-2'>
                           <h4 className='mb-3' > Research , Innovation And Development Division</h4>
             <p>The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the  commercial organizations, </p>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={12} lg={7}>
                <div className='primary_item d-flex mt-4 mb-4' style={{background:'#e4e4f0'}} >
                  <div className='privacy_img'>
                    <img src="images/icon_three.png" alt="" className='img-fluid'/>
                  </div>
                  <div className='primary_item_text ms-2'>
                           <h4 className='mb-3' > Research , Innovation And Development Division</h4>
             <p>The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the research and innovation services to the interested individuals, commercial organizations, industry, institutions and research centres through our dedicated team members with diversified experiences and talents. For more information, please visit our NSRIC RID platform. or contact at info@nsric.ca.</p>
                  </div>
                </div>
              </Col>
               <Col sm={12} md={12} lg={5} >
                <div className='primary_item d-flex mt-4 mb-4' style={{background:'#e4e4f0'}}>
                  <div className='privacy_img'>
                    <img src="images/icon_four.png" alt="" className='img-fluid'/>
                  </div>
                  <div className='primary_item_text ms-2'>
                           <h4 className='mb-3' > Research , Innovation And Development Division</h4>
             <p>The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the  commercial organizations, </p>
                  </div>
                </div>
              </Col>
                 <Col sm={12}  lg={12}>
                <div className='primary_item d-flex mt-4 mb-4' style={{background:'#e4e4f0'}} >
                  <div className='privacy_img'>
                    <img src="images/icon_five.png" alt="" className='img-fluid'/>
                  </div>
                  <div className='primary_item_text ms-2'>
                           <h4 className='mb-3' > Research , Innovation And Development Division</h4>
             <p>The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the research and innovation services to the interested individuals, commercial organizations, industry, institutions and research centres through our dedicated team members with diversified experiences and talents. For more information, please visit our NSRIC RID platform. or contact at info@nsric.ca.</p>
                  </div>
                </div>
              </Col>
             
             {/* Primary service img and text  */}
            </Row>
             {/* Primary service  */}
            
             {/* Primary service  */}
          </Container>
       </div>








  )
}
 
export default PrimaryService