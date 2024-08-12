// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: 'AIzaSyCW59fPoJt7IkAd9pTbvL37iPQ0cKlqWZk',
  authDomain: 'almi-bb52e.firebaseapp.com',
  projectId: 'almi-bb52e',
  storageBucket: 'almi-bb52e.appspot.com',
  messagingSenderId: '988456719615',
  appId: '1:988456719615:web:274caf336f59367d7d68ca',
  measurementId: 'G-Y5PZ4L6HJ3'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export async function uploadFile(file, filename) {
  const idgen = v4()
  const storageRef = ref(storage, `almimg/avatar/${idgen}` + filename)
  await uploadBytes(storageRef, file)
  return await getDownloadURL(storageRef)
}
