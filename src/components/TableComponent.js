import React from "react";
import {Table} from "react-bootstrap";
import TableCol from "./TableColComp";

function TableComp({props}) {
    console.log(props)
    const books = props.books;
    return(
        <Table striped bordered hover variant="dark" responsive>
            <thead>
            <tr>
                <th>#</th>
                <th>Book Name</th>
                <th>ISBN</th>
                <th>Author Name</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
                {<TableCol books={books}/>}
            </tbody>
        </Table>
    )
}
export default TableComp