import { auth, db } from './firebase';
import { USERS_COLLECTION_NAME } from '../common/constants/firebase';
import {
  ILoginFormValues,
  IRegisterFormValues,
} from '../common/interfaces/forms';

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

    await db
      .collection(USERS_COLLECTION_NAME)
      .doc(user.user?.uid)
      .set(userProfile);
  } catch (error) {
    throw error;
  }
}

export function loginUser({
  email,
  password,
}: ILoginFormValues): Promise<firebase.auth.UserCredential> {
  return auth.signInWithEmailAndPassword(email, password);
}
