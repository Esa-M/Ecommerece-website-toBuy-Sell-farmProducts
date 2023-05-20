import { signInWithPopup,signOut } from "firebase/auth"
import { db,storage,auth,productList,dist } from "./firebaseconfig";import {setDoc,doc,getDoc,getDocs,collection} from 'firebase/firestore'
import { uploadBytesResumable,ref,getDownloadURL} from "firebase/storage";

const pushUserData = async(data)=>{
   const dataRef = doc(db,'users',data.user.email)
   await setDoc(dataRef,{
   email :data.user.email ,
   pic :data.user.photoURL,
   name:data.user.displayName,
  }).then(()=>{
   localStorage.setItem('key',data.user.email)
  })
}
export const pushProduct =async(productName,productCost,productContact,productDesp,productCity,productLandMark,productImage,)=>{
   const credential = localStorage.getItem('key')
   const productRef = doc(db,'products',`${credential}#${productList.length}`)
   await setDoc(productRef,{name:productName,price:productCost,desp:productDesp,contact:productContact,landmark:productLandMark,city:productCity,imageName:productImage.name,publisher:credential})
   const productDist = doc(db,'district','city')
   // const findSameDist = getDoc(productDist)
   // findSameDist.data().district.forEach((dist,index)=>{
   //    if(dist == productCity){
   //      return findSameDist.data().district[index] == productCity
   //    }else{
   //       findSameDist.data().district.push(productCity)
   //    }
   //  setDoc(productDist,{district: findSameDist.data().district})
   // })
   dist.push(productCity)
   await setDoc(productDist,{district:dist})
   const storageRef = ref(storage,productImage.name)
   const upload = uploadBytesResumable(storageRef,productImage)
   const addlist = doc(db,'user',credential)
   productList.push(`${credential}#${productList.length}`)
   await setDoc(addlist,{productList:productList})
  
}
export const getUserData = async(id,setUserCredential)=>{
   const dataRef = doc(db,'users' ,id)
   const data = await getDoc(dataRef)
   setUserCredential(data.data())
}
 
export const signIn =(auth,provider,setCredantial,authNavigate,path)=>{
    signInWithPopup(auth,provider).then((data)=>{
    pushUserData(data)
    setCredantial(data.user)
    authNavigate(path)
   })
}
export const signoutRedirect =(navigate,path)=>{
   signOut(auth).then(()=>{
       navigate(path)
   })
}

export const getProduct =async(setProductList)=>{
   const productRef = collection(db,'products')
   const productArray = await getDocs(productRef)
   setProductList(productArray.docs)
}

export const getProductImage =(setImageUrl,path)=>{
   getDownloadURL(ref(storage,path)).then((url)=>{setImageUrl(url)})
}

export const getDist = async(setProductDist)=>{
   const distRef = doc(db,'district','city')
   const district =  await getDoc(distRef)
   setProductDist(district.data().district)
}