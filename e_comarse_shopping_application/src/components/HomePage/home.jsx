import React from 'react'
import ProductCard from './ProductCard'
import ProductFilter from './Filter'
import { useEffect,useState,useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../store/ProductListSlice';
import Navbar from './navber';

export default function home() {
    const dispatch = useDispatch();
      const[filter,setFilter] = useState({
    search:"",
    category:"all",
    price:"default"
    })
  const { productlist, loading, error } = useSelector((state) => state.PruductLists);
 


  function datafilter (name,value){
    setFilter((data) =>({...data,[name]:value}))
    // const lowersearch = filter.search.trim().toLocaleLowerCase()
    // const lowercategory = filter.category.toLocaleLowerCase()

  }

const filterproducts = useMemo(() =>{
  const list = Array.isArray(productlist) ? productlist :[]
  const lowersearch = filter.search.trim().toLocaleLowerCase()
  const lowercategory = filter.category.trim().toLocaleLowerCase()


    if (!lowersearch && lowercategory === 'all' && filter.price === 'defaul' ){
      return list
    }

     const filtered= list.filter((item) =>{
      const searchOk = !lowersearch || 
     ( item.title?.toLocaleLowerCase().includes(lowersearch) ?? false)

       const categoryOk = lowercategory === 'all' ||
     (  item.category?.toLocaleLowerCase()=== lowercategory ?? false)
       return searchOk && categoryOk
      })
     const sorted = [...filtered]
      if (filter.price === 'low-to-high'){
        sorted.sort((a,b) => Number(a.price)-Number(b.price))
      }
      else if(filter.price === 'high-to-low'){
         sorted.sort((a,b) => Number(b.price)-Number(a.price))
      }
      return sorted
}, [productlist,filter.category,filter.search,filter.price])


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
    <Navbar/>
    <ProductFilter  datafilter={datafilter} filter={filter}/>
    <ProductCard  productlist={filterproducts} loading={loading} error={error}/>
    </>
  )
}
