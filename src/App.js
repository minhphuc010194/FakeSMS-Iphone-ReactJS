import React,{useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Input_sms from './components/input';
import Share_screen from './components/share_screen';



function App() {
    const [name, setName] = useState("ACB")
    const [text, setText] = useState([])
    const [time, setTime] = useState("22:59")
    const [count_mess, setCountMess] = useState(9)

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
        </Col>
        <Col>
            <Share_screen
                name={name}
                text={text}
                del_text={del_text}
                get_input={get_input}
                time={time}
                count_mess={count_mess}
            />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
