import { db, auth } from '../firebaseConfig'
import { ref, onValue, push, update, remove, get , child, set} from 'firebase/database';

class User {
    constructor(name, hashedPassword){
        this.name = name
        this.hashedPassowrd = hashedPassword
    }
    async addToDataBase(){
        return await get(child(ref(db), `/users/${this.name}`)).then((snapshot) => {
            if (snapshot.exists()) {
                return {
                    message: "User Already Exists",
                    completed: false
                }
            } else {
                const user = {
                    name: this.name,
                    hashedPassword: this.hashedPassowrd
                }
    
                const res = set(ref(db, `/users/${this.name}`), user)
                return {
                    message: `Added ${this.name} to Database`,
                    completed: true,
                    user: user,
                    res: res
                }
            }
        }).catch((error) => {
            console.error(error);
        });
    }

}

export default User