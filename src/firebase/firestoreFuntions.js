import {
  getFirestore,
  collection,
  //   addDoc,
  getDocs,
  // doc,
  // getDoc,
  //   query,
  //   where,
  //   setDoc,
  //   deleteDoc,
} from 'firebase/firestore';
import { app } from 'fbase/firebase';

const db = getFirestore(app);

export const getDataCollection = async ({ collectionRef }) => {
  try {
    const response = [];
    const querySnapshot = await getDocs(collection(db, collectionRef));
    querySnapshot.forEach((doc) => {
      const data = { id: doc.id, ...doc.data() };
      response.push(data);
    });
    return response;
  } catch (error) {
    return error;
  }
};
