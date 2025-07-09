// src/firebaseConfig.ts <--- ¡IMPORTANTE: ESTE ES EL NUEVO NOMBRE DEL ARCHIVO!

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyChZGzVD5CsEbJMLA-jzXEuTs1ClJI97pU",
  authDomain: "v-connection-website.firebaseapp.com",
  projectId: "v-connection-website",
  storageBucket: "v-connection-website.firebasestorage.app",
  messagingSenderId: "456931554674",
  appId: "1:456931554674:web:ef16f1a2fe656d870859eb",
  measurementId: "G-LGHB7J7PD0"
};

const app = initializeApp(firebaseConfig);

// Initialize Analytics only if supported (i.e., in a browser environment)
let analytics = null; // Eliminado el tipo TypeScript para JS puro
if (typeof window !== 'undefined') {
  isAnalyticsSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized.");
    } else {
      console.warn("Firebase Analytics is not supported in this environment (likely SSR).");
    }
  });
}

const functions = getFunctions(app);

export { app, analytics, functions, httpsCallable };