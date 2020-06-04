import {AppBar, Toolbar, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";
import {Grid, List, Box} from "@material-ui/core";

const HomePage = () => {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
             <Grid item xs={4} container direction="column" justify="center" alignItems="center" style={{"maxHeight": "100%", "color": "#00f9f7"}}>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "60%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "60%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "60%"}}/>
            </Grid>
            <Grid item xs={4} container justify="center" alignItems="center" style={{"maxHeight": "100%"}}>
                <img src={"/static/images/tesla.jpg"} style={{"maxWidth": "60%"}}/>
            </Grid>
           <Grid item xs={4} container direction="row" justify="center" alignItems="center" style={{"maxHeight": "100%", "color": "#00f9f7"}}>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "30%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "30%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "30%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "30%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "30%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "30%"}}/>


            </Grid>
        </Grid>
    );
};

export default HomePage;