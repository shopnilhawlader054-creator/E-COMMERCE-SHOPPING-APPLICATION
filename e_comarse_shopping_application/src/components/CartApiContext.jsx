import { createContext, useContext, useState } from "react";
const CartContext = createContext();


export function Cartitem ({ children }){
const [cartitem,setCartItem] = useState([])
const [showmsg,setShowMsg] = useState({
    loading:false,
    success:false
})

 function addcartitem(product,qty){
    setShowMsg({...showmsg,loading:true})
    const id= product.id
    
    setCartItem((pev) =>{
        const index = pev.findIndex ((item) => item.id ===id)
        if(index === -1){
            const newcart = {...product,qty}
            return [...pev,newcart]
            
        }
        else{
            const nextList = [...pev]
            nextList[index] = {...nextList[index],qty:nextList[index].qty+qty}
            return nextList
        }
    }

)
setShowMsg((pev) => ({...pev,loading:false,success:true}))
}


function dleteaddtocartdata(product){
   setCartItem((pev) =>{
    const newdaddtocart = pev.filter((item) => item.id !== product.id) 
    return newdaddtocart
   })
}


function removesuccesmsg(){
    setShowMsg({...showmsg,success:false})
}


return(
    <CartContext.Provider value={{cartitem,showmsg,removesuccesmsg,addcartitem,dleteaddtocartdata}}>
        {children}
    </CartContext.Provider>
)
}
export function useCart(){
  return useContext(CartContext)
}