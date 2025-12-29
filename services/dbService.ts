
import { VolunteerData } from "../types";

// =================================================================
// নির্দেশাবলী (INSTRUCTIONS):
// ১. https://console.firebase.google.com এ যান এবং একটি প্রজেক্ট খুলুন।
// ২. "Firestore Database" এ ক্লিক করে ডেটাবেস তৈরি করুন (Start in test mode)।
// ৩. Project Settings > General > Your apps > Web app এ ক্লিক করে কনফিগারেশন কপি করুন।
// ৪. নিচের 'firebaseConfig' এর ভিতরে সেই তথ্যগুলো পেস্ট করুন।
// ৫. Firebase প্যাকেজ ইনস্টল করুন: npm install firebase
// ৬. নিচের কমেন্ট করা কোডগুলো আন-কমেন্ট (Uncomment) করুন।
// =================================================================

/*
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
*/

const firebaseConfig = {
  // আপনার Firebase কনফিগারেশন এখানে বসান:
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123456"
};

// Initialize Firebase only if config is valid (Basic validation)
let db: any = null;

/*
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    try {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    } catch (e) {
        console.error("Firebase init error:", e);
    }
}
*/

export const saveVolunteerData = async (data: VolunteerData & { nid?: string }) => {
  try {
    /*
    if (db) {
      // ডেটাবেস কানেক্টেড থাকলে Firestore এ সেভ হবে
      const docRef = await addDoc(collection(db, "volunteers"), {
        ...data,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent
      });
      console.log("Document written with ID: ", docRef.id);
      return true;
    } else {
    */
      // ডেটাবেস কানেক্টেড না থাকলে কনসোলে দেখাবে (Development Mode)
      console.log("====================================");
      console.log("DATABASE NOT CONNECTED. DATA RECEIVED:");
      console.log(JSON.stringify(data, null, 2));
      console.log("To save this data, configure Firebase in services/dbService.ts");
      console.log("====================================");
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    /*
    }
    */
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
};
