// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  deleteDoc,
  addDoc,
  getDoc
} from 'firebase/firestore'
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTRwWtXak_x6HfsmAOnRhQMXiQnaUmet8",
  authDomain: "react-dojo-app.firebaseapp.com",
  projectId: "react-dojo-app",
  storageBucket: "react-dojo-app.appspot.com",
  messagingSenderId: "1023792846184",
  appId: "1:1023792846184:web:64143c9b975dc1e65172dd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const blogsRef = collection(db, 'blogs');

export const useBlogsListener = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    return onSnapshot(blogsRef, snapshot => {
      setBlogs(snapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      }))
    })
  }, [])
  return blogs
}

export const getBlog = (id) => {
  return new Promise((resolve, reject) => {
    const blogRef = doc(db, 'blogs', id)
    getDoc(blogRef).then((res) => {
      resolve({id: res.id, ...res.data()})
    })
  })
}

export const deleteBlog = (id) => {
  return new Promise((resolve, reject) => {
    let blogRef = doc(db, 'blogs', id)
    deleteDoc(blogRef).then(() => {
      resolve()
    })
  })
}

export const addBlog = (blog) => {
  return new Promise((resolve, reject) => {
    addDoc(blogsRef, blog).then(() => {
      resolve()
    })
  })
}