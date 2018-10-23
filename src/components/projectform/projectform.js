import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './projectform.scss'
// import firebase from 'firebase';

class ProjectForm extends Component{
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form className="font border p-3 mt-1" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" value={this.state.value} onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Brief:</Label>
          <Input type="textarea" name="text" id="exampleText" value={this.state.value} onChange={this.handleChange}  />
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
          <Input type="text" value={this.state.value} onChange={this.handleChange} />
        </FormGroup>

        <Input type="submit" value="Crear" />
      </Form>
    );
  }

}

export default ProjectForm;