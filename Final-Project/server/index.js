const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const colors = require("colors");

app.use(express.json());
app.use(cors());

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce");
    console.log("Connected to MongoDB".bgGreen);
  } catch (err) {
    console.error("Error connecting to MongoDB:".bgRed, err);
  }
}

connectToDatabase();

// api
app.get("/", (req, res) => {
  res.send("server is running....");
});

// image storage
const storage = multer.diskStorage({
  destination: "./upload/img",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });
// creating upload endpoint
app.use("/img", express.static("upload/img"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: "1",
    img_url: `http://localhost:${port}/img/${req.file.filename}`,
  });
});



// schema for products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});


//user schema
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});


//to a add product
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});


//to delete a product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});


//to fetch all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetch");
  res.send(products);
});



// to register users
app.post("/register", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "Email already exists" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i]=0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const authToken = jwt.sign(data, 'secret_ecom');

  res.json({ success: true, authToken });
});


//to login users
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await Users.findOne({ email:req.body.email });
  if (!user) {
    return res
      .status(400)
      .json({ success: false, errors: "Email does not exist" });
  }
  if (password !== user.password) {
    return res
      .status(400)
      .json({ success: false, errors: "Password is incorrect" });
  }
  const data = {
    user: {
      id: user.id,
    },
  };
  const authToken = jwt.sign(data, "secret_ecom");
  res.json({ success: true, authToken });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`.rainbow);
});
