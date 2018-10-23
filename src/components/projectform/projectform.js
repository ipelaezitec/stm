import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './projectform.scss'
// import firebase from 'firebase';

class ProjectForm extends Component{
  
  constructor(props) {
    super(props);
    // this.state = {value: ''};
    this.state={
      name:"",
      brief:"",
      file:"",
      git:"",
    }
  }

  handleChange = (event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.name + this.state.brief + this.state.git);
    event.preventDefault();
  }

  handleInputChange = (event) => {
    const target = event.target;
    
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    const name = target.name;
    console.log(name);

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Form className="font border p-3 mt-1" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Brief:</Label>
          <Input type="textarea" name="brief" id="exampleText" value={this.state.brief} onChange={this.handleInputChange}  />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Imagen del proyecto.</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            (opcional)
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Git (opcional):</Label>
          <Input type="text" name="git" value={this.state.git} onChange={this.handleInputChange} />
        </FormGroup>

        <Input type="submit" value="Crear" />
      </Form>
    );
  }

}

export default ProjectForm;