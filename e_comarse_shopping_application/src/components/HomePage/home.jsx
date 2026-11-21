import React from 'react'
import ProductCard from './ProductCard'
import ProductFilter from './Filter'
import { useEffect,useState,useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../store/ProductListSlice';

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


    if (!lowersearch && lowercategory === 'all' ){
      return list
    }

     return list.filter((item) =>{
      const searchOk = !lowersearch || 
     ( item.title?.toLocaleLowerCase().includes(lowersearch) ?? false)

       const categoryOk = lowercategory === 'all' ||
     (  item.category?.toLocaleLowerCase()=== lowercategory ?? false)
       return searchOk && categoryOk
      })
 
}, [productlist,filter.category,filter.search])


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
    <ProductFilter  datafilter={datafilter} filter={filter}/>
    <ProductCard  productlist={filterproducts} loading={loading} error={error}/>
    </>
  )
}
