import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";
import React, {useState, Component} from "react";
import { Redirect } from 'react-router-dom';

class WelcomePage extends Component<any, any> {

    goHome =()=>{
        this.props.history.push('/home')
    };
    render(){
        return (
        <Grid container direction="row" justify="center" alignItems="center" style={{"marginTop":"5vh"}}>
            <Grid item xs={12} sm={6}container justify="center" alignItems="center" style={{"maxHeight": "100%"}}>
                <img src={"/static/images/tesla.jpg"} style={{"maxWidth": "60%"}}/>
            </Grid>
            <Grid item xs={12} sm={6} container direction="column" justify="center" alignItems="center" style={{"maxHeight": "100%", "color": "#00f9f7"}}>
                <img src={"/static/images/hola.png"} style={{"maxWidth": "60%"}}/>
                <div>Esta página web se ha creado </div>
                <div>para que puedas procesar tus imagenes</div>
                <div>mediante una Red Neuronal y conseguir</div>
                <div>una imagen totalmente nueva.</div>
                <div>¿Lo pruebas?</div>
                <Grid item xs={12} sm={6} container direction="column" justify="center" alignItems="center" style={{"maxHeight": "100%", "margin": "2vh", "color": "#00f9f7"}}>
                <Button variant="contained" color="primary" onClick={this.goHome}>Empezar</Button>
            </Grid>
            </Grid>

        </Grid>
        );
    }

} export default WelcomePage;

