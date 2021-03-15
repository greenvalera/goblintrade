import firebase from './init'

const auth = firebase.auth();
const firestore = firebase.firestore();

export function registerByUsernameAndPassword(email, password, firstName = '', lastName = '') {
    return new Promise(async (resolve, reject) => {
        try {
            const authInfo = await auth.createUserWithEmailAndPassword(email, password);
            const user = authInfo.user;
            if (user) {
                const userRef = firestore.collection('users').doc(user.uid);
                const data = {
                    firstName,
                    lastName
                };

                try {
                    await userRef.set(data);
                    resolve(data);
                } catch (error) {
                    console.log(error);
                    reject(error);
                }
            }
        } catch (error) {
            console.log(error);
            reject(error);
        }

    });
}

export async function signInWithEmailAndPassword(email, password) {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        };

        try {
            const doc = await firestore.collection('users').doc(user.uid).get();
            const {firstName, lastName} = doc.data();

            return {
                ...user,
                firstName,
                lastName
            };
        } catch (error) {
            console.log(error);
        }
    } catch(error) {
        console.log(error)
        throw new Error(error.message);
    }
}