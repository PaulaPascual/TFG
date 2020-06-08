import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import { Redirect } from 'react-router-dom';

export default function WelcomePage() {
    const [isReturn, setReturn] = useState(false)

    const goHome=()=>{
          setReturn(true);
    }
    if (isReturn){
        return <Redirect to='/home'/>
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{"marginTop":"5vh"}}>
            <Grid item xs={12} sm={6}container justify="center" alignItems="center" style={{"maxHeight": "100%"}}>
                <img src={"/static/images/tesla.jpg"} style={{"maxWidth": "60%"}}/>
            </Grid>
            <Grid item xs={12} sm={6} container direction="column" justify="center" alignItems="center" style={{"maxHeight": "100%", "color": "#00f9f7"}}>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "60%"}}/>
                que tal
                <Button variant="contained" color="primary" onClick={goHome}>Empezar</Button>
            </Grid>
        </Grid>
    );
}