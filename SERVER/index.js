const express = require("express");
const app = express();
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: '*'}));

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");
const paymentRoutes = require("./routes/Payments");

const database = require("./config/database");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { cloudinaryConnect } = require("./config/cloudinary");

dotenv.config()
const PORT = process.env.PORT || 4000;

database.connect();

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin:"*",
        credentials:true
    })
)
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)

//cloudinary connection
cloudinaryConnect();

//routes
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
    });
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);


//default route
app.get("/", (req, res) =>{
    return res.json({
        success:true,
        message:"Your server is up and running...."
    })
});

app.listen(PORT, () =>{
    console.log(`App is running at ${PORT}`)
})

