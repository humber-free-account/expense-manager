import React, { Component } from "react";
import './uploadreceipt.css';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default class UploadReceipt extends Component {
    state = {
        selectedFile: null,
        progress: 0
      }

    onFileChange = event => { 
        this.setState({ selectedFile: event.target.files[0] }); 
      };

      onFileUpload = event => {
      console.log(this.state.selectedFile); 
        const uploadTask = uploadBytesResumable(ref(getStorage(), 'receipts/'+this.state.selectedFile.name), this.state.selectedFile);
        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            document.getElementById("progress_value").setAttribute("style", "width:"+ progress + "%"); 
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              document.getElementById("image1").setAttribute("src", downloadURL);
            });
        }
        );
      };
  
  render() { 
      return (
        <div className="receipts_section"> 
            <h3 className="receipts_header">Upload Expense Receipts</h3>
            <div id="file_upload_section"> 
                <input class="login" id="file_selection_input" type="file" onChange={this.onFileChange} /> 
                <p></p>
                <button class="submitbtn" onClick={this.onFileUpload}> 
                  Upload Receipt! 
                </button> 
            </div> 
            <div class="container">
                <div id="progress_value"></div>
            </div>
        </div> 
    
        );
    }
}
