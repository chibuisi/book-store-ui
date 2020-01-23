import React from "react";
import {Container, Jumbotron, Row, Col} from "react-bootstrap";

class Welcome extends React.Component{

    render() {
        const marginTop = {
            marginTop: "20px"
        }
        return(
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Jumbotron className="bg-dark text-white">
                            <h1>Welcome to Book Store</h1>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Good Life, Health and Consciousness
                                </p>
                                <footer className="blockquote-footer">
                                    Kelvin Chibuisi
                                </footer>
                            </blockquote>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Welcome