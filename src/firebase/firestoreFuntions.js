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
    /* Getting the collection from the database. */
    const querySnapshot = await getDocs(collection(db, collectionRef));
    querySnapshot.forEach((doc) => {
      /* Creating a new object with the id and the data from the document. */
      const data = { id: doc.id, ...doc.data() };
      /* Pushing the data into the response array. */
      response.push(data);
    });
    return response;
  } catch (error) {
    return error;
  }
};
