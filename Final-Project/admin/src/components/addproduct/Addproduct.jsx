import './Addproduct.css';
import upload from '../../assets/upload_area.svg';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const success = () => toast.success('Product Added');
const error = () => toast.error('Something went wrong');
const Addproduct = () => {
    const [image, setImage] = useState(false);
    const [productdetails, setProductdetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    });
    const handleInput = (e) => {
        setProductdetails({ ...productdetails, [e.target.name]: e.target.value })
    };
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const addProduct = async () => {
        let responseData
        let product = productdetails;
        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
            product.image = responseData.img_url;
            console.log(product);
            await fetch ('http://localhost:4000/addproduct',{
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            }).then((resp) => resp.json()).then((data)=>{
                data.success ? success() : error()
            })
        }
    };
    
    
    return (
        <>
            <div className='addproduct'>
                <h1>Add Product</h1>
                <div className="productitem-field">
                    <p>Product Name</p>
                    <input value={productdetails.name} onChange={handleInput} type="text" name='name' placeholder="Enter name..." />
                </div>
                <div className="productprice-fields">
                    <div className="productprice">
                        <p>Price</p>
                        <input value={productdetails.old_price} onChange={handleInput} type="text" name="old_price" placeholder="Enter price..." />
                    </div>
                    <div className="productprice">
                        <p>Offer Price</p>
                        <input value={productdetails.new_price} onChange={handleInput} type="text" name="new_price" placeholder="Enter price you offer..." />
                    </div>
                </div>
                <div className="addproduct-itemfield">
                    <div className="category-selector">
                        <p>Product Category</p>
                        <select value={productdetails.category} onChange={handleInput} name="category">
                            <option value="women">Women</option>
                            <option value="men">Men</option>
                            <option value="kid">Kid</option>
                        </select>
                    </div>
                    <div className="image-input">
                        <label htmlFor="upload">
                            <img src={image?URL.createObjectURL(image):upload} className='upload-img' alt="upload" />
                        </label>
                        <input onChange={handleImage} type="file" name="image" id="upload" hidden />
                    </div>
                </div>
                <button onClick={()=>{addProduct()}}>Add Product</button>
                <Toaster />
            </div>
        </>
    )
}

export default Addproduct