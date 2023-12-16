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


let i = 1;

onValue(ref(db, 'parcels/'), (snapshot) => {
  
  
    let dataLenght = (Object.keys(snapshot.val()).length); 

    while ( i  <= dataLenght){
        const data = snapshot.val();
        // console.log(data)
        
        onValue(ref(db, `parcels/`),(snapshot)=>{
          let parTex = 'parcels_id_' + i;
       

          if (snapshot.val()[parTex] !== undefined) {

            let parTex1 = 'parcels_id_' + i;
            // console.log(snapshot.val()[parTex1])

            onValue(ref(db, `parcels/parcels_id_${i}`), (snapshot) => {
            const track = snapshot.val().track != undefined ? snapshot.val().track : '';
            // const track = snapshot.val().track ;
            // console.log(track)
              // console.log(snapshot.val().delete)
              // if (snapshot.val().delete == undefined) {
              //   console.log(snapshot.val().track)
              // }

              const parentContainer = document.querySelector('.list__wrapper');
              let newDiv = document.createElement('div');
              newDiv.classList.add('el__list');

              // Задаем текст или другое содержимое для нового элемента
              newDiv.innerHTML = `
                  <div class="el__title" data-info="Данные блока ">${track}</div>
                  <ion-icon class="deleteIcon" onclick="importAndShowClass('parcels_id_${i}')" id="close" name="close-outline"></ion-icon>
                `;

              // Добавляем новый элемент в родительский контейнер

              if (snapshot.val().delete === 'false' || snapshot.val().delete === undefined ) {
                parentContainer.appendChild(newDiv);
              }

              i++
              
            });

          }else{
            dataLenght++
            i++
          }

        })
        
        
    }
});
    

