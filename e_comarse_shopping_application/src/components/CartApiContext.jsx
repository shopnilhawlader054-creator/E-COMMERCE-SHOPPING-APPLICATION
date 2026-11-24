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

 function incrementQty(id){
    setCartItem((prev) =>{
      const newlist = prev.map((item) => item.id === id 
      ?{...item ,qty:(item.qty ||1) + 1}
      : item
    )
    return newlist
    })
 }

function decrementQty (id) {
    setCartItem((prev) =>{
      const newlist = prev.map((item) => item.id === id && item.qty > 0
      ?{...item ,qty:item.qty - 1}
      : item
    )
    return newlist
    })

 }
return(
    <CartContext.Provider value={{cartitem,showmsg,removesuccesmsg,addcartitem,dleteaddtocartdata,incrementQty,decrementQty}}>
        {children}
    </CartContext.Provider>
)
}
export function useCart(){
  return useContext(CartContext)
}