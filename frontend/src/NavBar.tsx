import React from 'react';
import {AppBar, Typography, Toolbar, Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Link to="/">Welcome</Link>
                <Link to="/home">Home</Link>
            </Toolbar>
        </AppBar>
    );
};

export default  NavBar;