import React from 'react';
import './receipts.css'; 
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import firebase from "firebase/compat/app"
import 'firebase/auth';
import FileUploader from "react-firebase-file-uploader";

/*const download = () => {
    const storage = getStorage();
    const listRef = ref(storage, 'receipts');
    listAll(listRef)
    .then((res) => {
        res.items.forEach((itemRef) => {
          if(receipts_list.includes(itemRef.name))
          {
            console.log('final: '+itemRef);
            receipts_list.pop(itemRef);
          }
          
          getDownloadURL(ref(listRef, itemRef.name))
            .then((url) => {
  
              if(!receipts_list_url.includes(url))
              {
                receipts_list_url.push(url);
              } 
                i++;
                const xhr = new XMLHttpRequest();
                  xhr.responseType = 'blob';
                  xhr.onload = (event) => {
                        const blob = xhr.response;
                  };
                  xhr.open('GET', url);
                  xhr.send();
  
                  const img = document.getElementById('image'+(i++));
                  img.setAttribute('src', url);
          })
          .catch((error) => {
          });
  
        });
      
    }).catch((error) => {
    });
}*/

const Receipts = () =>{
    return (
        <div className="receipts_section">
            <h3 className="receipts_header">Expense Receipt View:</h3>
            <div className="row">
            <div className="column">
                <div className="myDiv">
                    <img id="image1"  height="150" width="100"/>
                </div>
            </div>
            </div>
            <p></p>
        </div>
    );
}

export default Receipts;