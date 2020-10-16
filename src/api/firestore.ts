import { USERS_COLLECTION_NAME } from '../common/constants/firebase';
import {
  ILoginFormValues,
  IRegisterFormValues,
} from '../common/interfaces/forms';
import { db } from './firebase';

export function registerUser(
  userData: IRegisterFormValues
): Promise<
  firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
> {
  return db.collection(USERS_COLLECTION_NAME).add(userData);
}

export function loginUser(userData: ILoginFormValues) {}
