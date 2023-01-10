import { db, auth } from '../firebaseConfig'
import { ref, onValue, push, update, remove, get , child, set} from 'firebase/database';

class Business {
    constructor(name, businessCode){
        this.name = name
        this.businessCode = businessCode
        this.members = []
        this.adminstrators = []
    }
    async addToDatabase(user){
        return await get(child(ref(db), `/businesses/${this.name}`)).then((snapshot) => {
            if(snapshot.exists()){
                return {
                    message: "Business Already Exists",
                    completed: false
                }
            }else{
                const business = {
                    name: this.name,
                    
                }
            }
        })
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