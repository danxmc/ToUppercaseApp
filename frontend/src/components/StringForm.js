import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';

import StringInput from './StringInput';

class StringForm extends Component {
    render() {
        return (
            <Container className="mb-3">
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>

                        <Form inline onSubmit={this.props.handleSubmit}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <StringInput
                                  handleChange={this.props.handleChange}
                                  inputString={this.props.inputString}
                                />
                            </FormGroup>
                            <Button color='dark'>Mayus</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default StringForm;
