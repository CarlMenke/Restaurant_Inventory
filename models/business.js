import { firestore } from '../firebaseConfig'

class Business {
    constructor(name, businessCode){
        this.name = name
        this.businessCode = businessCode
        this.members = []
        this.adminstrators = []
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
    updateName(value) {
        if(value !== ""){
            this.name = value
            return {
                message: `Business Name Updated to ${value}`,
                completed: true
            }
        }else{
            return {
                message: `Must Enter a Valid Name`,
                completed: false
            }
        }
    }
}

export default Business