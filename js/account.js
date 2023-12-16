// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,
  get,
  ref,
  set,
  onValue, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmN3cGvlJSW33OjRwKrxRuhf5R1NkStDs",
  authDomain: "ali-cargo-express.firebaseapp.com",
  projectId: "ali-cargo-express",
  storageBucket: "ali-cargo-express.appspot.com",
  messagingSenderId: "868722943336",
  appId: "1:868722943336:web:c4730abd7a16bde1d222dd",
  measurementId: "G-M9J5PD6DET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



const userID = localStorage.getItem('user');
    
onValue(ref(db, `users/${userID}`), (snapshot) => {
        
        const name = snapshot.val().name;
        const phone = snapshot.val().phone;
        const surname = snapshot.val().surname;
        const city = snapshot.val().city;
        const password = snapshot.val().password;

        console.log(city)

        document.querySelector('.surname').innerHTML = surname;
        document.querySelector('.name').innerHTML = name;
        document.querySelector('.phone').innerHTML = phone;
        document.querySelector('.city').innerHTML = city;
        document.querySelector('.passwd').innerHTML = password;

});

document.querySelector('.exit').addEventListener('click', ()=>{
    
    if(confirm("Выйти из аккаунта?")){
        localStorage.removeItem('user');
        location.reload();
    }else{
        console.log('hmm...')
    }


});