import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header';

import ProjectCard from './components/projectcard/projectcard';
import ProjectForm from './components/projectform/projectform';
import {Container, Row,Col} from 'reactstrap';

import firebase from 'firebase';
import { throws } from 'assert';

class App extends Component {

  constructor(){
    super();
    this.state = {
      data:"",
      projects:[
        {name:"Syntax",brief:"Comparador de syntax"},
        {name:"stm",brief:"simple task manageraaaaaaaaaa"},
        {name:"asd1",brief:"test1"},
        {name:"asd2",brief:"test2"},
        {name:"asd3",brief:"test3"},
        {name:"asd4",brief:"test4"},
        ]
    }

  }

  
  componentDidMount  = () =>{
    const rootRef = firebase.database().ref().child('name');

    rootRef.on('value',snap =>{
      console.log(snap.val());
      this.setState({
        data:snap.val()
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <Row>
            <Col sm="3" className="test1 m-2">
              <ProjectForm/>
            </Col>
            <Col className="right-panel m-2">
              <Row>
                {this.state.projects.map((project)=>{

                  return <Col className="mt-1 mb-1" sm="4">
                          <ProjectCard data={project}/>
                         </Col>
                }
                )}
                
                {/* <p>{this.state.data}</p> */}
              </Row>
            </Col>
          </Row>
        </Container>
      
        


      </div>
    );
  }
}



export default App;
