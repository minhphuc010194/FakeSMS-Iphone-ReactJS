import React,{useState, useRef} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import Input_sms from './components/input';
import Share_screen from './components/share_screen';
import {useScreenshot, createFileName} from 'use-react-screenshot';


function App() {
    const [, setStick] = useState(0)
    const [name, setName] = useState("ACB")
    const [text, setText] = useState([])
    const [time, setTime] = useState("22:59")
    const [count_mess, setCountMess] = useState(9)
    const ref_screenShot = useRef()
    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });
    const getImage = () => takeScreenShot(ref_screenShot.current);
    
    const download = (image, { name = "img", extension = "jpg" } = {}) => {
        
        const a = document.createElement("a");
        a.setAttribute("id", "MyID");
        a.href = image;
        // const get_ = document.getElementById("MyID");
        // console.log(a,get_)
        // return;
        a.download = createFileName(extension, name);
        a.click();
        setTimeout(()=>window.location.reload(),500)
    };
    
    const downloadScreenshot = () => takeScreenShot(ref_screenShot.current).then(download);

    function get_input(tag, value){
        switch(tag){
            case "name": setName(value) ;break;
            case "text":
                let obj = {str: value, loc: "left"};
                setText((prev)=>[...prev, obj])
            break;
            case "mytext":
                let obj_mytext = {str: value, loc: "right"}
                setText((prev)=>[...prev, obj_mytext])
            break;
            case "time":
                setTime(value)
            break;
            case "count_mess":
                if(isNaN(value)){
                    value=0
                }
                if(value < 1000){
                    setCountMess(value)
                }
                
            break;
        }
    }
    function del_text(id) {
        let temp = [...text]
        temp.splice(id, 1)
        setText(()=>[...temp])
    }
  
  return (
    <Container className="container-root" style={{paddingLeft: 3}}>
      <Row>
          <Col>
            <Input_sms get_input={get_input} />
            <hr/>
            <Row>
                {/* <Col>
                    <Button onClick={getImage} variant="outline-info" block>Screenshot</Button>
                </Col> */}
                <Col>
                    <Button onClick={downloadScreenshot} variant="outline-success" block>Download ScreenShot</Button>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col style={{display: !image&&"none", textAlign:'center'}}>
                    <img  width={300} src={image} alt={"ScreenShot"} />
                </Col>
        
            </Row>
        </Col>
        <Col>
            <Share_screen
                name={name}
                text={text}
                del_text={del_text}
                get_input={get_input}
                time={time}
                count_mess={count_mess}
                ref_screenShot={ref_screenShot}
            />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
