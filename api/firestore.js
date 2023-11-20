import { getFirestore } from 'firebase/firestore';
import { getStorage} from "firebase/storage";
import firebase from './firebase';

export const firestoredb = getFirestore(firebase);
export const storage = getStorage(firebase);