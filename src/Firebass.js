import {initializeApp} from "firebase/app"
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import{ getFirestore } from 'firebase/firestore'
const firebaseConfig = {
      apiKey: "AIzaSyBUnROPMMIs8SNjScqa8lzHKNhnyPoW724",
      authDomain: "disney-clone-61eaa.firebaseapp.com",
      projectId: "disney-clone-61eaa",
      storageBucket: "disney-clone-61eaa.appspot.com",
      messagingSenderId: "273508865480",
      appId: "1:273508865480:web:708f0f1368fa163d7d1cfd",
      measurementId: "G-LBBG6P7CVY"
};

// Initialize Firebase
const firebaseApp=initializeApp(firebaseConfig)
const db=getFirestore(firebaseApp);
const auth=getAuth(firebaseApp);
const provider=new GoogleAuthProvider();
// const storage= firebase.storage();
export{auth,provider,db};
// export default db;