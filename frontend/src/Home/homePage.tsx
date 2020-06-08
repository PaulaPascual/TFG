import {Grid, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";

const HomePage = () => {
    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{"marginTop":"5vh"}}>
             <Grid item sm={2} xs={12}container direction="column" justify="center" alignItems="center" style={{"maxHeight": "100%", "color": "#00f9f7"}}>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "60%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "60%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "60%"}}/>
            </Grid>
            <Grid item sm={6} xs={12} container direction="column" justify="center" alignItems="center" style={{"maxHeight": "100%"}}>
                <img src={"/static/images/tesla.jpg"} style={{"maxWidth": "60%"}}/>
                <Button variant="contained" color="primary" style={{"marginTop":"5vh"}}>Buscar</Button>
            </Grid>
           <Grid item sm={2} xs={12} container direction="row" justify="center" alignItems="center" style={{"maxHeight": "100%", "color": "#00f9f7"}}>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "40%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "40%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "40%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "40%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "40%"}}/>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "40%"}}/>
            </Grid>
        </Grid>
    );
};

export default HomePage;