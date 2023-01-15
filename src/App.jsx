import { useState, useEffect } from 'react'
import { db } from "../firebase"
import { collection, getDoc, getDocs } from 'firebase/firestore';
import './App.css'


function App() {
  const [count, setUsers] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    getDocs( usersCollectionRef ).then((querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
      );
    });
  }, []);

  return (
    <div>
      {users.map((user => (
        <div key={user.id}>{user.name}</div>
      )))}
      
    </div>
  )
}

export default App
