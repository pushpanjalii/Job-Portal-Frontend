import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});

const app = express();

// app.get("/home", (req,res) => {
//     return res.status(200).json({
//         message: "coming form backend",
//         success:true
//     })
// });

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'*',
    cretentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000
app.listen(PORT,() => {
    console.log(`App is listening on port ${PORT}`);
})

