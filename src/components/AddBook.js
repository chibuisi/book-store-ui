import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from 'axios';


class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            isbn: '',
            author: '',
            edition: '',
            price: '',
            date: '',
            category: '',
            description: ''
        }
    }
    submitHandler = (e) => {
        console.log(this.state)
        e.preventDefault()
        axios.post('http://localhost:8080/api/books', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err+": Could not process")
            })

    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {name,isbn,author,edition,price,date,category,description} = this.state
        const marginTop = {
            marginTop: "20px"
        }
        const desc = {
            height: '50px',
            marginBottom: '30px'
        }
        return (
            <Container style={marginTop}>
                <Row>
                    <Col sm={2}><h3 className="text-white">Add Book</h3></Col>
                    <Col sm={8}>
                        <div className="text-white">

                            <Form onSubmit={this.submitHandler}>
                                    <Form.Group controlId="formBookName">
                                        <Form.Label>Book Name</Form.Label>
                                        <Form.Control type="text" placeholder="name" name="name" value={name} onChange={this.changeHandler}/>
                                    </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridISBN">
                                        <Form.Label>ISBN</Form.Label>
                                        <Form.Control type="text" placeholder="Enter ISBN" name="isbn" value={isbn}  onChange={this.changeHandler}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Label>Published Date</Form.Label>
                                        <Form.Control type="date" placeholder="Date Published" name="date" value={date} onChange={this.changeHandler}/>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAuthorName">
                                    <Form.Label>Author Name</Form.Label>
                                    <Form.Control type="text" placeholder="Author Name" name="author" value={author} onChange={this.changeHandler}/>
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEdition">
                                        <Form.Label>Edition</Form.Label>
                                        <Form.Control type="text" placeholder="Edition"  name="edition" value={edition} onChange={this.changeHandler}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCategory">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control as="select"  name="category" value={category}  onChange={this.changeHandler}>
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="number" step="0.01" placeholder="Amount"  name="price" value={price}  onChange={this.changeHandler}/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control style={desc} type="textarea" name="description" value={description} onChange={this.changeHandler}/>
                                </Form.Row>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddBook;