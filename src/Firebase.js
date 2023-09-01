// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyCkVLN0Yg4O4eeqUpGUIjeuuTvhTzD0RM4",
//     authDomain: "netflix-clone-9fdc8.firebaseapp.com",
//     projectId: "netflix-clone-9fdc8",
//     storageBucket: "netflix-clone-9fdc8.appspot.com",
//     messagingSenderId: "813655631235",
//     appId: "1:813655631235:web:a80e4f16a203c277de42b6"
//   };

//   //intialize the app which needs config
//   const firebaseApp = initializeApp(firebaseConfig);
//   //firestore is actually a databse which keep track what user subscription is
//   const db = getFirestore(firebaseApp);
//   //authentiation
//   const auth = getAuth(firebaseApp);
//   export {auth};
//   export default db;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
      apiKey: "AIzaSyCkVLN0Yg4O4eeqUpGUIjeuuTvhTzD0RM4",
      authDomain: "netflix-clone-9fdc8.firebaseapp.com",
      projectId: "netflix-clone-9fdc8",
      storageBucket: "netflix-clone-9fdc8.appspot.com",
      messagingSenderId: "813655631235",
      appId: "1:813655631235:web:a80e4f16a203c277de42b6"
    };

// Initialize the app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(firebaseApp);

// Get Auth instance
const auth = getAuth(firebaseApp);

export { auth, db };
