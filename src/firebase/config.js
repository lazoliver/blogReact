import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ5vqp1kqFGcydHc1Z__V5_COR-X_8r8o",
  authDomain: "miniblog-bf82e.firebaseapp.com",
  projectId: "miniblog-bf82e",
  storageBucket: "miniblog-bf82e.appspot.com",
  messagingSenderId: "383706027400",
  appId: "1:383706027400:web:b9f3d8bb4634f59eab163d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };