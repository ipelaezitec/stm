import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header'
import {Container, Row,Col} from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <Row>
            <Col xs="3" className="test1 m-2">
              asd
            </Col>
            <Col className="test2 m-2">
              asd
            </Col>
          </Row>
        </Container>

        


      </div>
    );
  }
}



export default App;
