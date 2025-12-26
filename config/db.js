import mongoose from "mongoose";

 export const connectDB = async () => {
    
        await mongoose.connect('mongodb+srv://ektasinha:yashrajekta@cluster0.vfxfw4i.mongodb.net/food-del').then(() => console.log("DB connected"));
 
    }  
