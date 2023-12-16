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


let phone =  document.getElementById('phone');
let name =  document.getElementById('name');
let surname =  document.getElementById('surname');
let city =  document.getElementById('city');
let paswd =  document.getElementById('paswd');
let button = document.querySelector('.button');

phone.addEventListener('input', ()=>{
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';  

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
name.addEventListener('input', ()=>{
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
surname.addEventListener('input', ()=>{
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
city.addEventListener('input', ()=>{
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
paswd.addEventListener('input', ()=>{
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;


    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})




onValue(ref(db, 'users/'), (snapshot) => {

    let lengthO = Object.keys(snapshot.val()).length;
    let userID = 'user_id_'+ lengthO;
    
    console.log(userID)
    

    document.querySelector('.button').addEventListener('click', ()=>{

    
    set(ref(db, `users/${userID}`),
    {
        phone: phone.value,
        name: name.value,
        surname: surname.value,
        city: city.value,
        password: paswd.value
    })
    .then(() => {
        console.log("Запись в базу данных прошла успешно.");
        form.reset();
        console.log('Вы авторизованы')
        window.location.replace("./index.html");
        localStorage.setItem('user', `${userID}`);
    })
    .catch((error) => {
        console.log("Ошибка записи в базу данных: ", error);
        location.reload();
        });
    
    })
});


