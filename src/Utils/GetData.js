import { collection, getDocs, query, where, limit, startAfter } from "firebase/firestore"; 
import {db} from '../ConfigFirebase/ConfigFirebase';

import { doc, getDoc } from "firebase/firestore";

export async function getData(){
    try{
const getClients = await getDocs(collection(db , 'clientes'))
const docs = []
getClients.forEach((doc) => {
    docs.push({...doc.data(),id:doc.id})
})
return docs


}catch(error){
    console.log(error)
}

}

