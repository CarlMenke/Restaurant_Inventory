import { firestore } from '../firebaseConfig'

class User {
    constructor(firstName, lastName, email, hashedPassword){
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.hashedPassowrd = hashedPassword
    }
    async addToDataBase(){
        const userRef = firestore.collection('users').doc(`${this.email}`) 
        await userRef.set({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            hashedPassowrd: this.hashedPassowrd
        }).then(() => {
            return {
                completed: true,
                message: "Successfully Signed Up"
            }
        }).catch((error) => {
            return {
                completed: false,
                message: "Failed to Sign Up",
                error: error
            }
        })
        this.refrence = userRef
    }
}

export default User