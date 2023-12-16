import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,
  get,
  ref,
  set,
  remove,
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
//

export function showClass(element) {
    // var className = element.className;
    let confirmed = window.confirm("Вы точно хотите удалить трек?");
    if (confirmed){
        
        let deleteStatus = 'true';

        remove(ref(db, `users/${userID}/bookmarks/${element}`))
            .then(() => {
                console.log('Трек добавлен')
                location.reload();
                input.value = ''
            })
            .catch((error) => {
                location.reload();
                console.log("Ошибка записи в базу данных: ", error);
            });
    
        
 
 
    }
}