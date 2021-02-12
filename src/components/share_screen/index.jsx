import React from 'react';
import { Col, Container, Row, Badge, Form } from 'react-bootstrap';
import location from '../../icons/ios10-location-status-icon.png';
import cellular_signal from '../../icons/ios11-cellular-signal-icon.png'
import wifi from "../../icons/ios10-wifi-symbol-status-icon.png";
import battery from "../../icons/ios12-battery-status-icon.png";
import avatar from '../../icons/Placeholder.png';
import camera from "../../icons/camera.png";
import store from "../../icons/store.png";
import btn_sentSMS from '../../icons/btn_sentSMS.png';
import photo from '../../icons/photo.png';
import store_blue from '../../icons/store_blue.png';
import smile_face from '../../icons/smile_face.png';
import smile_face01 from '../../icons/smile_face01.png';
import sound from '../../icons/sound.png';
import health from '../../icons/health.png';
import reddit from '../../icons/reddit.png';
import vertical_dash from '../../icons/vertical_dash.png';
import undercore from '../../icons/undercore.png';

import './index.css';
import {IoIosArrowBack} from 'react-icons/io';
import {MdNavigateNext} from 'react-icons/md';

import PropTypes from 'prop-types';
Share_screen.propTypes = {
    
};

function Share_screen(props) {
    return (
        <Container className='screen' style={{width: 480, marginTop: 20, border: "1px solid #dfdfdf"}}>
            <Row className="header-phone" style={{background:"#d6d7dc",paddingTop: 10, paddingBottom: 20}}>
                <Col style={{textAlign:"left", paddingLeft:30}}>
                    <b>22:59</b>
                    <img style={{width: 16}} src={location} />
                </Col>
                <Col style={{textAlign:"right"}}>
                    <img style={{width: 25}} src={cellular_signal} />
                    <img style={{width: 25}} src={wifi} />
                    <img style={{width: 30}} src={battery} />
                </Col>
            </Row>
            <Row style={{background:"#d6d7dc"}}>
                <Col>
                    <IoIosArrowBack size={35} color="#007bff" />
                    <span >
                       <Badge 
                            style={{borderRadius: 15, fontWeight:400, height: 20, width: 30, position:"relative", left: -8}} 
                            variant="primary">113</Badge>
                    </span>
                </Col>
                <Col style={{textAlign:"center"}}>
                    <img style={{width: 80, position:"relative", top: -18}} src={avatar} />
                    <h6 style={{position:"relative", top:-17}}>ACB <MdNavigateNext style={{position:"absolute", top:-4}} size={30} color="#87909b" /></h6>
                </Col>
                <Col></Col>
            </Row>
            <br/>
{/* =============messenger========================== */}
            <Row className="body-phone" style={{minHeight: 668, maxHeight: 1201}}>
                <Col>
                    <Row style={{top: 0, display: 'block'}}>
                        <Col className='bubble-grey'>
                            <span >
                                ACB: TK 2132132323232(VND) +190,000,000 luc 01:59 12/02/2021. So du 188,001,000. GD: li xi tet :D.
                            </span>
                            <div className='corner'></div>
                        </Col>
                        
                    </Row>
                    
                    <Row style={{top: 0, display: 'block'}}>
                        <Col className='bubble-grey'>
                            <span >
                                ACB: TK 2132132323232(VND) +190,000,000 luc 01:59 12/02/2021. So du 188,001,000. GD: li xi tet :D.
                            </span>
                            <div className='corner'></div>
                        </Col>
                    </Row>
                    <Row style={{top: 0, display: 'block'}}>
                        <Col className='bubble-grey'>
                            <span >
                                Hello my name is Phuc adsasdas dsssssss das fasfdsf SDF
                            </span>
                            <div className='corner'></div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <span className='bubble-grey'>
                                Hello my name is Phuc
                            </span>
                            <div className='corner'></div>
                        </Col>
                    </Row> */}
                    
                </Col>
                
            </Row>
    {/* ================footer===================================== */}
            <br/>
            <Row>
                <Col style={{textAlign: 'left'}}>
                    <img style={{width: 40,cursor:"pointer"}} src={camera} />
                </Col>
                <Col style={{position:"relative", left: -90}}>
                    <img style={{width: 45, cursor:"pointer"}} src={store} />
                </Col>
                <Col>
                    <Form.Control style={{position:"absolute", width: 300, left: -163, borderRadius: 20}} type="text" placeholder="Tin nhắn văn bản" />
                    <img style={{width: 33, position:"absolute", left: 100, top: 2, cursor:"pointer"}} src={btn_sentSMS} />
                </Col>
            </Row>
            
            <Row className='footer' style={{marginTop: 5,background:"#d6d7dc",minHeight: 30, maxHeight: 100, height: 100, width:'107%'}}>
                <Col style={{paddingRight: 3}}>
                    <img style={{width: 50,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={photo} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={store_blue} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={smile_face} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={smile_face01} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={sound} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={health} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img style={{width: 3, height: 30,marginLeft: 12, marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={vertical_dash} />
                </Col>
                
                <Col style={{paddingRight: 3}}>
                    <img style={{position:"absolute",width: 37,marginTop: 7, marginLeft: -7, cursor:"pointer"}} src={reddit} />
                </Col>
                <Row>
                    <Col>
                        <img style={{position:'relative', left: 160, top: '29%', width: '55%'}} src={undercore} />
                    </Col>
                
                </Row>
            </Row>
            
        </Container>
    );
}

export default Share_screen;