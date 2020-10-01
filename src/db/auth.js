import firebase from './init'

const auth = firebase.auth();
const firestore = firebase.firestore();

export function registerByUsernameAndPassword(email, password, firstName = '', lastName = '') {
    return new Promise((resolve, reject) => {
        auth.createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log('error');
                console.log(error);
                reject(error);
            });
        auth.onAuthStateChanged(user => {
            if (user) {
                const userRef = firestore.collection('users').doc(user.uid);
                const data = {
                    firstName,
                    lastName
                };
                userRef.set(data).then(result => {
                    resolve(result);
                })
            }
        });
    });
}