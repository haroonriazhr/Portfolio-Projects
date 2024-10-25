import { useParams, Link } from "react-router-dom";
import { lastproduct } from "../assets/electronics";
const Lastproductdetail = () => {
    const { id } = useParams();
    function addtocart(){
        alert("Added to cart: " + filterdata.title);
        localStorage.setItem('cart', JSON.stringify(filterdata));
      } 
      const filterdata = lastproduct.find(product => product.id == id);
  return (
    <>
    <div className="w-full pt-[80px]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full h-auto">
              <img src={filterdata.image} alt={filterdata.title} className="w-full h-[400px] object-contain rounded-lg shadow-md"/>
            </div>
            <div className="w-full">
              <h1 className="text-3xl font-semibold mb-4">{filterdata.title}</h1>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl">★★★★☆</span>
                <span className="ml-2 text-gray-600">(4.5/5.0)</span>
              </div>
              <p className="text-2xl font-bold text-red-500 mb-4">${filterdata.price}</p>
              <p className="text-gray-700 text-md mb-6">{filterdata.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button onClick={addtocart} className="w-full sm:w-1/2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Add to Cart
                </button>
                <Link to='/electronics' className="w-full sm:w-1/2 py-2 px-4">
                 Back To Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lastproductdetail