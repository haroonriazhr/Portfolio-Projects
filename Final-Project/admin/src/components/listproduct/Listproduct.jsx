import './Listproduct.css';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const del = () => toast.error('Product Deleted');

const Listproduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchinfo = async () => {
    const response = await fetch('http://localhost:4000/allproducts');
    // .then((res)=>res.json())
    // .then((data)=>{setAllProducts(data)});
    const data = await response.json();
    setAllProducts(data);
  };

  useEffect(() => {
    fetchinfo();
  }, [])

  const removeProduct = async(id)=>{
    await fetch ('http://localhost:4000/removeproduct',{
      method: 'POST',
      headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
   del()
   await fetchinfo()
  }
  return (
    <>
    <div className="listproduct">
        <h1>All Products List</h1>
        <div className="listProduct-headings">
          <p>Product</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listallProducts">
          {allproducts.map((product,index) => (
          <div className="listProduct-card" key={index}>
            <img src={product.image} alt="" className='listproduct-img' />
            <p>{product.name.slice(0,5)}...</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <button onClick={()=>{removeProduct(product.id)}}><i onClick={()=>{removeProduct(product.id)}} className="ri-delete-bin-line"></i></button>
            <Toaster/>
          </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Listproduct