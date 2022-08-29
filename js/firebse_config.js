// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, onValue, get, push } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDVoSW63DXL1ZvcUf_y8mO9kFDIyaaoJkM",
  authDomain: "ashfaqalizardaristore-2da09.firebaseapp.com",
  projectId: "ashfaqalizardaristore-2da09",
  storageBucket: "ashfaqalizardaristore-2da09.appspot.com",
  messagingSenderId: "204162533546",
  appId: "1:204162533546:web:b97f223918c842125628d3",
  measurementId: "G-BPGNPC44DN"
};
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase js and config loaded success!");

function submitData() {
  var email = document.getElementById('email');
  var btn = document.getElementById('btnSubscription');
  if (!email.value.length) {
    alert('Please enter your email address to subscribe to email notifications.');
    return;
  }

  btn.disabled = true;
  const notification_subscriptions = 'notification_subscriptions';
  const db = getDatabase();
  var newKey = push(child(ref(db), notification_subscriptions)).key;
  var data = { id: newKey, email: email.value, isSubscribed: true };
  set(ref(db, `${notification_subscriptions}/` + newKey), data)
    .then(() => {
      email.value = "";
      alert("Thank you, now you will receive email notifications!");
    })
    .catch((error) => {
      btn.disabled = false;
      alert("Oops! Something went wrong while submitting the form.");
    });

}
document.getElementById('btnSubscription').addEventListener('click', submitData);