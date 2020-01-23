import React, {Component} from 'react';
import {Col, Container, Row, Table} from "react-bootstrap";
import Pagination from "./Pagination";
import './style.css'
import axios from 'axios'
import Book from "./Book";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/books')
            .then(response => {
                this.setState({books: response.data})
            })
            .catch(err => {
                console.log("unable to load")
            })
    }

    render() {
        const marginTop = {
            marginTop: "30px"
        }
        return (
            <Container style={marginTop}>
                <Row>
                        {this.state.books.length !== 0 ? <div>
                                <Container style={marginTop}>
                                    <Row>
                                        <h3 className="text-white">List Book</h3>
                                        <Col lg={12}>
                                            <Table striped bordered hover variant="dark" responsive>
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Date</th>
                                                    <th>Author</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.books.map(item => <Book book={item}/>)}
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Container>
                            <div className="pager" style={marginTop}>
                                <Pagination/>
                            </div>
                        </div>
                            : null}
                </Row>
            </Container>
        );
    }
}

export default BookList;