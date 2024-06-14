import { getDatabase, onValue, push, ref, set } from "firebase/database";
import app from "../config/firebaseConfig";




export const db = getDatabase(app);

export const sendData = (nodeName:string,data:any) => {

    data.id = push(ref(db, `${nodeName}`)).key;

    const reference = ref(db, `${nodeName}/${data.id}`);

    set(reference,data);

};

export const getData = (nodeName:any, id?:any) => {

    const refernce = ref(db, `${nodeName}/${id ? id : "" }`);

    onValue(refernce,(dt) => {

        // console.log(dt.val());

       console.log(Object.values(dt.val()))

        
    })

}




