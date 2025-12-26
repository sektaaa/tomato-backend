import mongoose from "mongoose";

//  export const connectDB = async () => {
    
//         await mongoose.connect('mongodb+srv://ektasinha:yashrajekta@cluster0.vfxfw4i.mongodb.net/food-del').then(() => console.log("DB connected"));
 
//     }  



export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection error:", error);
  }
};
