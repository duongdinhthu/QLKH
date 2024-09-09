import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQpLXtrIWE2rrG9s9yDnQC58iJGq-lXbE",
    authDomain: "qlkh-e305e.firebaseapp.com",
    projectId: "qlkh-e305e",
    storageBucket: "qlkh-e305e.appspot.com",
    messagingSenderId: "776251385869",
    appId: "1:776251385869:web:647b1d8116edc48d840d44",
    measurementId: "G-NSLWG22BPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up user
async function signUp(email, password, role) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed up:', user);

        // Call backend to assign the role to the user
        const token = await user.getIdToken();
        await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ email, password, role })
        });

        console.log('User role assigned successfully.');
    } catch (error) {
        console.error('Error during sign up:', error.message);
    }
}

// Sign in user
async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed in:', user);

        // Get the user's token and store it in localStorage to use in future API requests
        const token = await user.getIdToken();
        localStorage.setItem('authToken', token);

        console.log('User signed in and token saved.');
    } catch (error) {
        console.error('Error during sign in:', error.message);
    }
}

// Sign out user
async function signOutUser() {
    try {
        await signOut(auth);
        localStorage.removeItem('authToken'); // Clear token from storage
        console.log('User signed out.');
    } catch (error) {
        console.error('Error during sign out:', error.message);
    }
}

// Fetch courses (example of using the token to call backend API)
async function fetchCourses() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        console.error('No auth token found, please sign in first.');
        return;
    }

    try {
        const response = await fetch('/courses', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const courses = await response.json();
        console.log('Courses:', courses);
    } catch (error) {
        console.error('Error fetching courses:', error.message);
    }
}

// Usage examples
// To sign up a new user (you can use 'admin' or 'user' role):
// signUp('test@example.com', 'password123', 'user');

// To sign in an existing user:
// signIn('test@example.com', 'password123');

// To sign out the user:
// signOutUser();

// To fetch courses after sign in:
// fetchCourses();
