import React from "react";

function Book(props) {
    const book = props.book
    return(
        <tr>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.date}</td>
            <td>{book.author}</td>
        </tr>
    )
}

export default Book