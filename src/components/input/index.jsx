import React,{useRef} from 'react';
import {Accordion, Card, Button, Form, InputGroup, Row, Col} from 'react-bootstrap';

import PropTypes from 'prop-types';

Input_sms.propTypes = {
    get_input: PropTypes.func,
};

function Input_sms(props) {
    const {get_input} = props
    const ref_text = useRef("")
   


    const change_text = () =>{
        if((ref_text.current).trim()){
            get_input("text",ref_text.current)
            document.getElementById('input-text').value=""
            ref_text.current = ""
        }
    }

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Text Message Conversation
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Form.Control onChange={(e)=>get_input("name",e.target.value)} type="text" placeholder="Name...." />
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            id="input-text"
                                            placeholder="Text input..."
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            onChange={(e)=>ref_text.current = e.target.value}
                                            onKeyDown={(e)=>{if(e.key==="Enter"){change_text()}}}
                                        />
                                        <InputGroup.Append>
                                            <Button onClick={change_text}>PUSH</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control onChange={(e)=>get_input("time",e.target.value)} type="time" defaultValue="22:59" placeholder="Time...." />
                                </Col>
                                <Col>
                                    <Form.Control onChange={(e)=>get_input("count_mess", parseInt(e.target.value))} type="number" placeholder={9} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Battery
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Rảnh rỗi viết tiếp....</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Connection
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Rảnh rỗi viết tiếp....</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Settings
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Rảnh rỗi viết tiếp....</Card.Body>
                    </Accordion.Collapse>
                </Card>
                
            </Accordion>
            
        </>
    );
}

export default Input_sms;