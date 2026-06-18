// ============================================================
// Firebase config — вставь сюда свои значения из консоли Firebase.
// Firebase Console → Project settings → General → "Your apps" → Web app → SDK setup and configuration
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyBm3nXM0awmGRPcwNE3PfEndGSqtNt08Os",
  authDomain: "tt1exam.firebaseapp.com",
  projectId: "tt1exam",
  storageBucket: "tt1exam.firebasestorage.app",
  messagingSenderId: "982934229679",
  appId: "1:982934229679:web:cfe9b5025a91e520bf7a5a",
  measurementId: "G-C97EHHV4VF"
};

window.FIREBASE_CONFIGURED = false;
try {
  if (firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("YOUR_")) {
    firebase.initializeApp(firebaseConfig);
    window.FIREBASE_CONFIGURED = true;
  } else {
    console.warn("Firebase не настроен: впиши свои ключи в firebase-config.js. Сейчас результаты сохраняются только локально (localStorage).");
  }
} catch (e) {
  console.warn("Ошибка инициализации Firebase:", e);
}
