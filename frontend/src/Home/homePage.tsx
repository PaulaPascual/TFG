import {Grid, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import React, {Component} from "react";
import axios from "axios";
import "./homePage.css"


class HomePage extends Component<any, any>{


    state = {
      selectedFile: null,
      name: "sin imagen",
      style: 1,
    }

    fileSelectedHandler =(e: any)=>{
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      this.setState({
          selectedFile: e.target.files[0],
          name: e.target.files[0].name,
      })
        console.log(e.target.files[0])
    }

    ola=(e: any)=>{
      this.setState({
          style: 1
      })
    }
  van=(e: any)=>{
      this.setState({
          style: 2
      })
    }
    guernica=(e: any)=>{
      this.setState({
          style: 3
      })
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
                <label htmlFor="file-upload" className="custom-file-upload">
                    SUBE TU IMAGEN
                </label>
                <input id="file-upload" type="file" onChange={this.fileSelectedHandler}/>
                <div style={{"color": "#00f9f7"}}>{this.state.name}</div>
                <Button variant="contained" color="primary" >MEZCLA</Button>
            </Grid>
           <Grid item sm={2} xs={12} container direction="row" justify="center" alignItems="center" style={{"maxHeight": "100%", "color": "#00f9f7"}}>
                <input type="image" src={"/static/images/ola.png"} style={{"maxWidth": "60%", "margin": "1vh"}} onClick={this.ola}/>
                <input type="image" src={"/static/images/van.png"} style={{"maxWidth": "60%", "margin": "1vh"}} onClick={this.van}/>
                <input type="image" src={"/static/images/guernica.png"} style={{"maxWidth": "60%", "margin": "1vh"}} onClick={this.guernica}/>
           </Grid>
        </Grid>
      );
    }
}export default HomePage;

