import React,{useRef} from 'react';
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
    name: PropTypes.string,
    text: PropTypes.array,
    del_text: PropTypes.func,
    get_input: PropTypes.func,
    time: PropTypes.string,
    count_mess: PropTypes.number
};

function Share_screen(props) {
    const {name, text, del_text, get_input, time, count_mess} = props
    const ref_myText = useRef("")

    function handle_del(id){
        if (window.confirm(`Bạn chắc chắn muốn xóa ?`)) {
            del_text(id)
        }
    }
    function handle_sentMyText(){
        if((ref_myText.current).trim()){
            get_input('mytext',(ref_myText.current).trim())
            document.getElementById('footer-input-mytext').value=""
            ref_myText.current=""
        }
        
    }
    // console.log(text)
    return (
        <Container className='screen'>
            <Row className="header-phone-row-01">
                <Col className="header-phone-col-01">
                    <b>{time}</b>
                    <img style={{width: 16}} src={location} />
                </Col>
                <Col className="header-phone-col-02">
                    <img style={{width: 25}} src={cellular_signal} />
                    <img style={{width: 25}} src={wifi} />
                    <img style={{width: 30}} src={battery} />
                </Col>
            </Row>
            <Row className="header-phone-row-02">
                <Col>
                    <IoIosArrowBack size={35} color="#007bff" />
                    <span >
                       <Badge 
                            style={{borderRadius: 15, fontWeight:400, height: 20, width: 30, position:"relative", left: -8}} 
                            variant="primary">{count_mess}</Badge>
                    </span>
                </Col>
                <Col style={{textAlign:"center"}}>
                    <img style={{width: 80, position:"relative", top: -18}} src={avatar} />
                    <h6 style={{position:"relative", top:-17}}>{name} <MdNavigateNext style={{position:"absolute", top:-4}} size={30} color="#87909b" /></h6>
                </Col>
                <Col></Col>
            </Row>
            <br/>
{/* =============messenger========================== */}
            <Row className="body-phone" style={{minHeight: 668, maxHeight: 1201}}>
                <Col>
                    {text.map((item,i)=>{
                        return <Row className='body-phone-text-row' key={i}>
                                    <Col style={{textAlign: item.loc}}>
                                        <span className={'bubble-grey-'+item.loc} onClick={()=>handle_del(i)}>
                                            {item.str}
                                            <div className={'corner-'+item.loc}></div>
                                        </span>
                                    </Col>
                                </Row>
                    })}
                </Col>
                
            </Row>
    {/* ================footer===================================== */}
            <br/>
            <Row>
                <Col style={{textAlign: 'left'}}>
                    <img onClick={()=>alert("Chờ rãnh :v")} style={{width: 40,cursor:"pointer"}} src={camera} />
                </Col>
                <Col style={{position:"relative", left: -90}}>
                    <img onClick={()=>alert("Chờ rãnh :v")} style={{width: 45, cursor:"pointer"}} src={store} />
                </Col>
                <Col>
                    <Form.Control
                        id='footer-input-mytext'
                        className='footer-input-mytext-col'
                        onChange={(e)=> ref_myText.current=e.target.value}
                        type="text" placeholder="Tin nhắn văn bản" />
                    <img 
                        onClick={()=> handle_sentMyText()} 
                        style={{width: 33, position:"absolute", left: 100, top: 2, cursor:"pointer"}} src={btn_sentSMS} />
                </Col>
            </Row>
            
            <Row className='footer' style={{marginTop: 5,background:"#d6d7dc",minHeight: 30, maxHeight: 100, height: 100, width:'107%'}}>
                <Col style={{paddingRight: 3}}>
                    <img onClick={()=>alert("Chờ rãnh :v")} style={{width: 50,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={photo} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img onClick={()=>alert("Chờ rãnh :v")} style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={store_blue} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img onClick={()=>alert("Chờ rãnh :v")} style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={smile_face} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img onClick={()=>alert("Chờ rãnh :v")} style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={smile_face01} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img onClick={()=>alert("Chờ rãnh :v")} style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={sound} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img onClick={()=>alert("Chờ rãnh :v")} style={{width: 46,marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={health} />
                </Col>
                <Col style={{paddingRight: 3}}>
                    <img style={{width: 3, height: 30,marginLeft: 12, marginTop: 9, borderRadius: 15, cursor:"pointer"}} src={vertical_dash} />
                </Col>
                
                <Col style={{paddingRight: 3}}>
                    <img onClick={()=>alert("Chờ rãnh :v")} style={{position:"absolute",width: 37,marginTop: 7, marginLeft: -7, cursor:"pointer"}} src={reddit} />
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