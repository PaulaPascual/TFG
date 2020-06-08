import React from 'react';
import {AppBar, Typography, Toolbar, Button, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <AppBar position="sticky" style={{"backgroundColor": "#003948"}}>
            <Toolbar>
                <a href={"/"}>
                    <img src={"/static/images/logo.png"} style={{"maxWidth": "15%"}} />
                </a>
                <div style={{"float": "right"}}>
                    <Link to="/">Welcome</Link>
                <Link to="/home">Home</Link>
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default  NavBar;