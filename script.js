


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAcdqV8iMZAOz4BQGwlGNGCyGGFVHxMVZA",
    authDomain: "user-authentication-f3353.firebaseapp.com",
    projectId: "user-authentication-f3353",
    storageBucket: "user-authentication-f3353",
    messagingSenderId: "1026852027315",
    appId: "1:1026852027315:web:226fb21f1c5a9256b829c6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const authcontainer = document.getElementById("auth_container");
const homecontainer = document.getElementById("home_container");
const showemail = document.getElementById("showemail");
const createbtn = document.getElementById("create_btn");
const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const loginbtn = document.getElementById("Login_btn");
const login_email = document.getElementById("login_email");
const login_password = document.getElementById("login_password");
const alreadyacc = document.getElementById("already");
const signup = document.getElementById("signup_container");
const login = document.getElementById("login_container");
const logout_btn = document.getElementById("logout_btn");
const dontacc = document.getElementById("dont");

// Firebase Auth State Change Listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        authcontainer.style.display = "none";
        homecontainer.style.display = "flex";
        showemail.textContent = user.email;
    } else {
        authcontainer.style.display = "flex";
        homecontainer.style.display = "none";
    }
});

// Event Listeners
createbtn.addEventListener("click", createaccount);
loginbtn.addEventListener("click", loginaccount);
alreadyacc.addEventListener("click", () => {
    signup.style.display = "none";

    login.style.display = "flex";

});
dontacc.addEventListener("click", () => {
    signup.style.display = "flex";
    login.style.display = "none"
});

// Functions
function createaccount() {
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // Additional actions after sign up, if needed
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

function loginaccount() {
    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // Additional actions after sign in, if needed
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
}
logout_btn.addEventListener("click", logout)
function logout() {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}



