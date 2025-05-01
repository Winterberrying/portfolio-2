import { database } from "./firebase";
import { ref, set, get, update, remove, onValue, off } from "firebase/database";

// Write data
export const writeData = (path, data) => {
  return set(ref(database, path), data);
};

// Read data once
export const readData = (path) => {
  return get(ref(database, path));
};

// Update specific fields
export const updateData = (path, updates) => {
  return update(ref(database, path), updates);
};

// Delete data
export const deleteData = (path) => {
  return remove(ref(database, path));
};

// Set up realtime listener
export const setupRealtimeListener = (path, callback) => {
  const dbRef = ref(database, path);
  onValue(dbRef, (snapshot) => {
    callback(snapshot.val());
  });
  return () => off(dbRef); // Return cleanup function
};