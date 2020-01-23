import React from "react";

function TableCol(props) {
    const {books} = props.books;
    const bookList = books.map((book) =>
            <tr key={books.name}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
            </tr>
    )
    return(
        <React.Fragment>
            {bookList}
        </React.Fragment>
    )
}

export default TableCol