import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import productRoute from './routes/product.route.js';
import cartRoute from './routes/cart.route.js';
import connectDB from './config/db.js';
import Razorpay from 'razorpay';
import path from 'path';
import { fileURLToPath } from 'url';
import { getkey, paymentProcess, paymentVerification } from './controllers/user.controller.js';
// import { urlencoded } from 'body-parser';

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

dotenv.config({});

const app = express();
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, '../Frontend/dist'))) 
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend/dist/index.html')); 
})
app.get("/home", (req, res) => {
    return res.status(200).json({
        message: "Welcome to the home page!",
        success:true
    });
});




const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/cart", cartRoute);

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})



app.post("/payment/process", paymentProcess);
app.get('/getkey', getkey)
app.post('/paymentSuccess', paymentVerification)

app.listen(PORT,() => { 
    connectDB();
    console.log(`listening on ${PORT}`);
});