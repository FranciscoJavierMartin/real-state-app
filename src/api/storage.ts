import 'firebase/storage';
import { storage } from './firebase';

export function saveDocument(
  filename: string,
  document: ArrayBuffer | Blob | Uint8Array
) {
  return storage.ref().child(filename).put(document);
}

export function getDocument(fileUrl: string) {
  return storage.ref().child(fileUrl).getDownloadURL();
}
