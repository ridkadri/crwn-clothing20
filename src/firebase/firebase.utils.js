import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBiWeW_l_BKL7XpgAJgu30PE6GOrfMJtIU",
    authDomain: "crwn-clothingdb-86f2f.firebaseapp.com",
    databaseURL: "https://crwn-clothingdb-86f2f.firebaseio.com",
    projectId: "crwn-clothingdb-86f2f",
    storageBucket: "crwn-clothingdb-86f2f.appspot.com",
    messagingSenderId: "1099114988808",
    appId: "1:1099114988808:web:787e545c5d5abc9fb958bd"
};

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;