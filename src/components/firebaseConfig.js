import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig, fetchAndActivate, getValue } from "firebase/remote-config";
// Configuración de Firebase (copia esto desde Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBRyI46nA8PnIy2hn-WevgTJG48qaDVw-I",
  authDomain: "cavoundalfa-bfaa0.firebaseapp.com",
  projectId: "cavoundalfa-bfaa0",
  storageBucket: "cavoundalfa-bfaa0.appspot.com",
  messagingSenderId: "979607031398",
  appId: "1:979607031398:web:1dc4cf235844b2492c67a7",
  measurementId: "G-MD1VV6TK28"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const remoteConfig = getRemoteConfig(app);
// Opcional: Configurar Remote Config
remoteConfig.settings.minimumFetchIntervalMillis = 0; // Refrescar cada 1 hora 3600000
export { db, collection, addDoc, remoteConfig };
