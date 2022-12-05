import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from '../../styles/home.module.css';
const Banner = () => {
    const settings = {
      dots: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
      fade: true,
      infinite: true,
    };

    
  return (
    <div >
    <Slider {...settings}>
  
      <div>
      <Card style={{ width: '100%' }}>
      <Row>
        <Col  xl={6}> 
        <Card.Body>
          <div style={{ marginLeft:'40px',marginTop:'60px' }}>
          <Card.Title  className='learn' style={{ fontSize:'30px',fontWeight:'700',color:'rgb(28, 93, 200)' }}>AKD DIVISION</Card.Title>
          <Card.Text style={{ fontSize:'30px',fontWeight:'500',color:'#000' }}> 
            The main mission of NSRCI is to <span style={{ fontSize: '40px',fontWeight:'700'  }}>
               Learn,experience and disseminate knowledge </span> 
             to others. 
          </Card.Text>
          <Button  variant="primary">Get more</Button>
          </div>
        </Card.Body>
        </Col>
        <Col   xl={6}>
            <Card style={{border:'none' }}>
              <Card.Img  variant="top" style={{ height:'400px' }}  src={"images/akd_one.png"} className="img-fluid" />
            </Card>
           
        </Col>
      </Row>
    </Card>
      </div>




      <div>
      <Card style={{ width: '100%' }}>
      <Row>
            <Col xl={6}>
            <Card style={{border:'none' }}>
              <Card.Img  variant="top" style={{ height:'400px' }}  src={"images/akd_two.png"} className="img-fluid" />
            </Card>
           
        </Col>
        <Col xl={6}>
               
        <Card.Body>
          <div style={{ marginLeft:'40px',marginTop:'60px' }}>
          <Card.Title style={{ fontSize:'35px',fontWeight:'700',color:'rgb(28, 93, 200)' }}>AKD DIVISION</Card.Title>
          <Card.Text style={{ fontSize:'30px',fontWeight:'700',color:'#000' }}>
            The main mission of NSRCI is to <span style={{  fontSize: '16px' }}>
               Learn,experience and disseminate  </span> 
            know to others.
          </Card.Text>
          <Button  variant="primary">Get more</Button>
          </div>
        </Card.Body>
        </Col>
    
      </Row>
    </Card>
      </div>




      <div>
      <Card style={{ width: '100%' }}>
      <Row>
        <Col xl={6}>
               
        <Card.Body>
          <div style={{ marginLeft:'40px',marginTop:'60px' }}>
          <Card.Title style={{ fontSize:'30px',fontWeight:'700',color:'rgb(28, 93, 200)' }}>AKD DIVISION</Card.Title>
          <Card.Text style={{ fontSize:'30px',fontWeight:'700',color:'#000' }}>
            The main mission of NSRCI is to <span>
               Learn,experience and disseminate  </span> 
            know to others.
          </Card.Text>
          <Button  variant="primary">Get more</Button>
          </div>
        </Card.Body>
        </Col>
        <Col xl={6}>
            <Card style={{border:'none' }}>
              <Card.Img  variant="top" style={{ height:'400px' }}  src={"images/akd_three.png"} className="img-fluid" />
            </Card>
           
        </Col>
      </Row>
    </Card>
      </div>




        <div>
      <Card style={{ width: '100%' }}>
      <Row>
        <Col xl={6}>
               
        <Card.Body>
          <div style={{ marginLeft:'40px',marginTop:'60px' }}>
          <Card.Title style={{ fontSize:'30px',fontWeight:'700',color:'rgb(28, 93, 200)' }}>AKD DIVISION</Card.Title>
          <Card.Text style={{ fontSize:'30px',fontWeight:'700',color:'#000' }}>
            The main mission of NSRCI is to <span>
               Learn,experience and disseminate  </span> 
            know to others.
          </Card.Text>
          <Button  variant="primary">Get more</Button>
          </div>
        </Card.Body>
        </Col>
        <Col xl={6}>
            <Card style={{border:'none' }}>
              <Card.Img  variant="top" style={{ height:'400px' }}  src={"images/akd_four.png"} className="img-fluid" />
            </Card>
           
        </Col>
      </Row>
    </Card>
      </div> 
    </Slider>
  </div>


   
  )
}


export default Banner
