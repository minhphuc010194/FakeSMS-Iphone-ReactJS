import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Input_sms from './components/input';
import Share_screen from './components/share_screen';
function App() {
  return (
    <Container>
      <Row>
          <Col><Input_sms /></Col>
          <Col><Share_screen /></Col>
      </Row>
    </Container>
  );
}

export default App;
