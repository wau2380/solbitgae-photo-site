// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyCrn9qL0YPLDSyeNob4ldA2hw-TaFKz0IQ",
  authDomain: "solbitzae.firebaseapp.com",
  databaseURL: "https://solbitzae-default-rtdb.firebaseio.com",
  projectId: "solbitzae",
  storageBucket: "solbitzae.appspot.com",
  messagingSenderId: "63026107814",
  appId: "1:63026107814:web:5867907b370d55e76eeb67",
  measurementId: "G-TWB9LCC1DM",
};

import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var timestamp = Number(new Date());
  var storageRef = firebase.storage().ref(timestamp.toString());
  var $ = jQuery;

  var file_data = $("#uploadZip").prop("files")[0];
  console.log(file_data);
  storageRef.put(file_data);
});

var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var timestamp = Number(new Date());
  var storageRef = firebase.storage().ref(timestamp.toString());
  var $ = jQuery;

  var file_data = $("#uploadZip2").prop("files")[0];
  console.log(file_data);
  storageRef.put(file_data);
});

var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var timestamp = Number(new Date());
  var storageRef = firebase.storage().ref(timestamp.toString());
  var $ = jQuery;

  var file_data = $("#uploadZip3").prop("files")[0];
  console.log(file_data);
  storageRef.put(file_data);
});

var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var timestamp = Number(new Date());
  var storageRef = firebase.storage().ref(timestamp.toString());
  var $ = jQuery;

  var file_data = $("#uploadZip4").prop("files")[0];
  console.log(file_data);
  storageRef.put(file_data);
});

const db = getFirestore();
// // const auth = getAuth();

// // collection ref
const colRef = collection(db, "classes");

const addStudnetsForm = document.querySelector("form");
addStudnetsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    class: addStudnetsForm.class.value,

    createdAt: serverTimestamp(),
  }).then(() => {
    addStudnetsForm.reset();
    console.log();
  });
});
