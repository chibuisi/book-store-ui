import React, {Component} from 'react';
import {Container, Navbar, Row, Col} from "react-bootstrap";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    updateTime = () => {
        setInterval( () => {
            this.setState({date: new Date})
        },1000)

    }
    render() {
        const marginBottom = {
            marginBottom: "20px"
        }
        let fullYear = new Date().getFullYear();
        const {date} = this.state
        return (
            <Container>
                <Navbar fixed="bottom" variant="dark" bg="dark">
                    <Row>
                        <Col lg={12} className="text-center text-muted">
                            <div><span>{date.toLocaleTimeString()}</span> {fullYear-3} - {fullYear} All rights reserved</div>
                            {this.updateTime()}
                        </Col>
                    </Row>
                </Navbar>
            </Container>
        );
    }
}

export default Footer;