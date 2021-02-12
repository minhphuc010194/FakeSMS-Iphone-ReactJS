import React,{useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Input_sms from './components/input';
import Share_screen from './components/share_screen';



function App() {
    const [name, setName] = useState("ACB")
    const [text, setText] = useState([])
    


    function get_input(tag, value){
        switch(tag){
            case "name": setName(value) ;break;
            case "text": 
                // let temp = [...text]; 
                let obj = {str: value, loc: "left"}; 
                // temp.push(obj)
                setText((prev)=>[...prev, obj])
            break;
            case "mytext":
                let obj_mytext = {str: value, loc: "right"}
                setText((prev)=>[...prev, obj_mytext])
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
            />
        </Col>
      </Row>
    </Container>
  );
}

export default App;