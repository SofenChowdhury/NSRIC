import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from '../../styles/home.module.css';
const Mission = () => {
  return (
    <>
    
     <style jsx>
        {`
           .mission{
            background: #efefef;
            padding-top: 44px;
            padding-bottom: 80px;
           }
           .maincontainert{
            position: relative;
            width: 100%;
            height:300px;
            }
            .thecardt{
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: .8s;
            }
            .the_frontt {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            }
            .the_frontt img{
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            }
            .the_backt{
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            background: #AAAAAA;
            transform: rotate(180deg);
            -webkit-transform: rotateX(180deg);
            -moz-transform: rotateX(180deg);
            -ms-transform: rotateX(180deg);
            -o-transform: rotateX(180deg);
            }
            .thecardt:hover{
            transform: rotate(180deg);
            -webkit-transform: rotateX(180deg);
            -moz-transform: rotateX(180deg);
            -ms-transform: rotateX(180deg);
            -o-transform: rotateX(180deg);
            }
        `}
     </style>
    
    <div className="mission">
         <Container>
            <Row   style={{ border:'2px solid #555' }}>
        
                <div className={`${'d-flex '} ${'justify-content-between '} ${'flex-wrap '} ${'p-2'} ${style.mission_part}`}>
                    <div className={`${'mb-2'} ${'mt-2'} ${style.mission_item}`} style={{ width:'49%' }}>
                        <div>
                             <div >
                                <div className='maincontainert'>
                                    <div className='thecardt'>
                                    <div className='the_frontt'>
                                    <img src="images/miss (1).png" alt="" />
                                    </div>
                                    <div className='the_backt' >
                                       <div className={style.mission_text} style={{width:'550px',margin:'0 auto' }}>
                                          <h3 className='text-center ' style={{ color:'#fff',fontSize:'40px',fontWeight:'600',marginTop:'50px',marginBottom:'15px' }}>Mission</h3>
                                        <p style={{ color:'#fff',fontSize:'20px',fontWeight:'400',textAlign:'justify',padding:'0 10px' }}>To disseminate knowledge by making a difference within the conventional education; research, innovation, and development (RID); online education; and beyond with your expertise based on a creative, adaptive, sustainable, and holistic approach.</p>
                                       </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${'mb-2'} ${'mt-2'} ${style.mission_item}`} style={{ width:'49%' }}>
                        <div>
                             <div >
                                <div className='maincontainert'>
                                    <div className='thecardt'>
                                    <div className='the_frontt'>
                                    <img src="images/miss (2).png" alt="" />
                                    </div>
                                    <div className='the_backt ' >
                                       <div className={style.mission_text}  style={{width:'550px',margin:'0 auto' }}>
                                          <h3 className='text-center' style={{ color:'#fff',fontSize:'40px',fontWeight:'600',marginTop:'50px',marginBottom:'15px' }}>Mission</h3>
                                        <p style={{ color:'#fff',fontSize:'20px',fontWeight:'400',textAlign:'justify',padding:'0 10px' }}>To disseminate knowledge by making a difference within the conventional education; research, innovation, and development (RID); online education; and beyond with your expertise based on a creative, adaptive, sustainable, and holistic approach.</p>
                                       </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${'mb-2'} ${'mt-2'} ${style.mission_item}`} style={{ width:'49%' }}>
                        <div>
                             <div >
                                <div className='maincontainert'>
                                    <div className='thecardt'>
                                    <div className='the_frontt'>
                                    <img src="images/miss (3).png" alt="" />
                                    </div>
                                    <div className='the_backt ' >
                                       <div className={style.mission_text}  style={{width:'550px',margin:'0 auto' }}>
                                          <h3 className='text-center' style={{ color:'#fff',fontSize:'40px',fontWeight:'600',marginTop:'50px',marginBottom:'15px' }}>Mission</h3>
                                        <p style={{ color:'#fff',fontSize:'20px',fontWeight:'400',textAlign:'justify',padding:'0 10px' }}>To disseminate knowledge by making a difference within the conventional education; research, innovation, and development (RID); online education; and beyond with your expertise based on a creative, adaptive, sustainable, and holistic approach.</p>
                                       </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${'mb-2'} ${'mt-2'} ${style.mission_item}`} style={{ width:'49%' }}>
                        <div>
                             <div >
                                <div className='maincontainert'>
                                    <div className='thecardt'>
                                    <div className='the_frontt'>
                                    <img src="images/miss (4).png" alt="" />
                                    </div>
                                    <div className='the_backt ' >
                                       <div className={style.mission_text}  style={{width:'550px',margin:'0 auto' }}>
                                          <h3 style={{ color:'#fff',fontSize:'40px',fontWeight:'600',marginTop:'50px',marginBottom:'15px',textAlign:'center' }}>Mission</h3>
                                        <p style={{ color:'#fff',fontSize:'20px',fontWeight:'400',textAlign:'justify',padding:'0 10px' }}>To disseminate knowledge by making a difference within the conventional education; research, innovation, and development (RID); online education; and beyond with your expertise based on a creative, adaptive, sustainable, and holistic approach.</p>
                                       </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </Row>
        </Container>
    
    </div>
      </>
  )
}

export default Mission