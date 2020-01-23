import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Container, Row} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    const marginTop = {
        marginTop: "20px"
    }
  return (
    <Router>
        <NavigationBar/>
        <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/add" exact component={AddBook}/>
            <Route path="/list" exact component={BookList}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
