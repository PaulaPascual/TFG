import {Grid, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import React, {Component} from "react";
import axios from "axios";


class HomePage extends Component<any, any>{
  uploadPicture=()=>{
        axios.get('uplaod/')
    }

    render(){
        return (
        <Grid container direction="row" justify="center" alignItems="center" style={{"marginTop":"5vh"}}>
             <Grid item sm={2} xs={12}container direction="column" justify="center" alignItems="center" style={{"maxHeight": "100%", "color": "#00f9f7"}}>
                <img src={"/static/images/paso_uno.png"} style={{"maxWidth": "100%"}}/>
                <img src={"/static/images/paso_dos.png"} style={{"maxWidth": "100%"}}/>
                <img src={"/static/images/paso_tres.png"} style={{"maxWidth": "100%"}}/>
            </Grid>
            <Grid item sm={6} xs={12} container direction="column" justify="center" alignItems="center" style={{"maxHeight": "100%"}}>
                <img src={"/static/images/tesla.jpg"} style={{"maxWidth": "60%"}}/>

            </Grid>
           <Grid item sm={2} xs={12} container direction="row" justify="center" alignItems="center" style={{"maxHeight": "100%", "color": "#00f9f7"}}>
                <img src={"/static/images/ola.png"} style={{"maxWidth": "60%", "margin": "1vh"}}/>
                <img src={"/static/images/van.png"} style={{"maxWidth": "60%", "margin": "1vh"}}/>
                <img src={"/static/images/guernica.png"} style={{"maxWidth": "60%", "margin": "1vh"}}/>
           </Grid>
        </Grid>
      );
    }
}export default HomePage;

