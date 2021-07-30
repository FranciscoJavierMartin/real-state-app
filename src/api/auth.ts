import { auth, db } from './firebase';
import { USERS_COLLECTION_NAME } from '../common/constants/firebase';
import {
  ILoginFormValues,
  IRegisterFormValues,
  IUserProfileFormValues,
} from '../common/interfaces/forms';

export async function getUserProfile(
  id: string | undefined
): Promise<
  firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
> {
  return await db.collection(USERS_COLLECTION_NAME).doc(id).get();
}

export async function registerUser(
  userData: IRegisterFormValues
): Promise<void> {
  try {
    const user = await auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    const userProfile: Partial<IRegisterFormValues> = { ...userData };
    delete userProfile.password;

    return await db
      .collection(USERS_COLLECTION_NAME)
      .doc(user.user?.uid)
      .set(userProfile);
  } catch (error) {
    throw error;
  }
}

export async function loginUser({
  email,
  password,
}: ILoginFormValues): Promise<
  firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
> {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    return getUserProfile(user.user?.uid);
  } catch (error) {
    throw error;
  }
}

export async function logoutUser(): Promise<void> {
  await auth.signOut();
}

export async function updateUserProfile(data: IUserProfileFormValues) {
  const id = auth.currentUser?.uid;
  return await db
    .collection(USERS_COLLECTION_NAME)
    .doc(id)
    .set(data, { merge: true });
}
