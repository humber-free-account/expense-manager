/* <!-- Author Ashokchakravarthi, Archana 
   UseState and useEffect are library handling to manage session info of the user.  --> */
import { useState, useEffect } from 'react';
import './App.css';
/* <!-- Author Ashokchakravarthi, Archana 
    Login Form --> */
import Form from './Components/Common/Form';
import Home from './Components/Home';

/* <!-- Author Ashokchakravarthi, Archana 
    Defined Add and Edit Expense pages for routing --> */
import AddExpense from './Components/expense/AddExpense';
import EditExpense from './Components/expense/EditExpense';

/* <!-- Author Ashokchakravarthi, Archana 
    Routes is the parent element  of Route to handle the authenticated/unauthenticated user in the app --> */
import { Routes, Route, useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* <!-- Author Ashokchakravarthi, Archana 
    Used to download Expense Receipts from Firebase Storage --> */
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

function AppIn(){

}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

/*const storage = getStorage();
const listRef = ref(storage, 'receipts');
let i=0; 
const receipts_list  =  [];
const receipts_list_url  =  [];

 <!-- Author Ashokchakravarthi, Archana 
    To find all the file items inside the Storage directory --> 

   listAll(listRef).then((res) => {
      res.items.forEach((itemRef) => {
        var itemRefName = itemRef.name;
        if(!receipts_list.includes( itemRefName ) )
        receipts_list.push(itemRefName);
      });
    });
    const uniqueString = [...new Set(receipts_list)];

  //const uniqueString = [...new Set(receipts_list)];
  //console.log("rakidarakida: "+uniqueString);


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

                var imgage = document.createElement('img');
                imgage.setAttribute('src', url);
                document.getElementById('receipts_list').appendChild(imgage);
        })
        .catch((error) => {
        });

      });
    
  }).catch((error) => {
  });
*/

  /* <!-- Author Ashokchakravarthi, Archana 
    User will get Autht Token for his/her login session and stored in cookie --> */
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
    }
    if(id == 3){
      navigate('/add');
    }
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])
  return (
    <div className="App">
      <>
        <ToastContainer />
        <Routes>
          <Route
            path='/login'
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />}
          />

          <Route
            path='/register'
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />}
          />

          <Route
            path='/home'
            element={
              <Home />}
          />

          <Route
            path='/addexpense'
            element={
              <AddExpense />}
          />

          <Route
            path='/editexpense'
            element={
              <EditExpense />}
          />

        </Routes>
      </>
    </div>
  );
}

export default App;
