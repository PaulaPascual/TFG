import {Grid, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import React, {Component} from "react";
import axios from "axios";
import "./homePage.css"
import ImageUploading from "react-images-uploading"


class HomePage extends Component<any, any>{
    state = {
        selectedFile: '',
      style: 1,
      result: ''
    }

    ola=(e: any)=>{
      this.setState({
          style: 1
      })
                console.log(this.state.style)

    }
  van=(e: any)=>{
      this.setState({
          style: 2
      })
              console.log(this.state.style)

    }
    guernica=(e: any)=>{
      this.setState({
          style: 3
      })
        console.log(this.state.style)
    }

    fileSelectedHandler = (e:any)=>{
        this.setState({
            selectedFile: e[0].file
        })
        console.log("ok")
    }
    subir = (e:any) => {
        const data = new FormData()
        data.append('file', this.state.selectedFile);
        data.append('style', '' + this.state.style)
        axios.post("/upload/", data);
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
            <ImageUploading onChange={this.fileSelectedHandler}>
                    {({ imageList, onImageUpload }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        {imageList.map(image => (
                          <div key={image.key} className="image-item">
                            <img src={image.dataURL} alt="" style={{"maxWidth": "100%"}} />
                            <div className="button-mezcla">
                                <Button variant="contained" color="primary" onClick={this.subir} >MEZCLA</Button>
                            </div>
                          </div>
                        ))}
                        <Button variant="contained" color="primary" onClick={onImageUpload}>SUBE TU IMAGEN</Button>
                      </div>
                    )}
                  </ImageUploading>

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

