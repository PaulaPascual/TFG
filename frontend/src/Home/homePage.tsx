import {AppBar, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";
import {Grid, List, Box} from "@material-ui/core";

const HomePage = () => {
    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{"height": "80vh"}}>
            <Grid item xs={6}>
                Hola
            </Grid>
            <Grid item xs={6}>
                que tal
            </Grid>
        </Grid>
    );
};

export default HomePage;