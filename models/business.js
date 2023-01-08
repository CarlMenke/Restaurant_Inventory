import { db, auth } from '../firebaseConfig'

class Business {
    constructor(name, businessCode){
        this.name = name
        this.businessCode = businessCode
    }
    addToDatabase(){

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