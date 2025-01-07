




const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBCXh0p9hfou0vWDOBxgSpL6C2yFsi-luw",
    authDomain: "auth-form-62f4d.firebaseapp.com",
    projectId: "auth-form-62f4d",
    storageBucket: "auth-form-62f4d.firebasestorage.app",
    messagingSenderId: "521518235425",
    appId: "1:521518235425:web:e9abd295bc51f2dc3a0860"
});



const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = ()=>{
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;


if(!email || !password){
  alert('Please enter both email and password.');
  return;
  }
  console.log(email,password)
// alert('plese register the details')
firebase.auth().createUserWithEmailAndPassword(email,'/'+ password)
  .then((result) => {
    // Signed in 
    window.open('signin.html','_self')
    console.log(result)
    // ...
  })
  .catch((error) => {
   console.log(error);
//    console.log(error.message);
    
  });
}

//siginin funtions 

const signIn=()=>{
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
  if(!email || !password){
    alert('Please enter both email and password.');
    return;
  }
    firebase.auth().signInWithEmailAndPassword(email,'/'+ password)
  .then((result) => {
    // Signed in
  //  document.write('sign up successful')
  alert('Ready to open a Product s')
  window.open('cards_UI.html','_self')
   
   console.log(result)
    // ...
  })
  .catch((error) => {
    alert('your credentials could not be verified are you sure you have an account?')
  });
}

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/v8/firebase.User
//     var uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

const gestLogin=()=>{
  window.open('cards_UI.html','_self')
}