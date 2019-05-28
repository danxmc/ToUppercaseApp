import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';

class NewString extends Component {
	render() {
		return (
            <Container>
                <Jumbotron>
                    <h1 className='display-3'>{this.props.resultString}</h1>
                </Jumbotron>
            </Container>
		);
	}
}

export default NewString;
