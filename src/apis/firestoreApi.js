import {app} from "../firebaseConfig"

import {addDoc, deleteDoc, onSnapshot,collection,getFirestore,getDocs} from "firebase/firestore"

const db = getFirestore(app)
const cartRef = collection(db,"carts")

export const addToCart = (item)=>{

addDoc(cartRef,item).then((res)=>{
console.log(res)
})
.catch((err)=>{
console.log(err)
})
}

export const getCarts = async(setCarts)=>{
    const data = await getDocs(cartRef)
    const filteredData = data.docs.map((item)=>{
return {
...item.data(), id:item.id
}
    })

setCarts(filteredData)

}