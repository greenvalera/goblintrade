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