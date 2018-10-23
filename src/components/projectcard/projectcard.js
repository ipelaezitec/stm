import React, { Component} from 'react';
import { Button ,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';
// import './header.scss'
// import firebase from 'firebase';

class ProjectCard extends Component{
  constructor(){
    super();
    this.state={

    }

  }

  render(){
    return(<div>
      <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardSubtitle>{this.props.data.name}</CardSubtitle>
                <CardText>{this.props.data.brief}</CardText>
                <Button>Entrar</Button>
              </CardBody>
            </Card>
    </div>

    )
  }

}

export default ProjectCard;