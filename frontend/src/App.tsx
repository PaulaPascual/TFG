import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from 'axios';
import WelcomePage from "./Welcome/welcomePage";
import HomePage from "./Home/homePage";
import {createMuiTheme, ThemeProvider} from '@material-ui/core';



const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00f9f7',
        },
        secondary: {
            main: '#003948',
        },
    },
    overrides:{
        MuiButton:{
            root:{
                maxWidth: 150,
                minWidth: 150,
            },
        },
    },

})

class App extends Component {
    componentDidMount(): void {
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <NavBar/>
                    <Switch>
                        <Route path="/home" component={HomePage}/>
                        <Route path="/" component={WelcomePage}/>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default App;