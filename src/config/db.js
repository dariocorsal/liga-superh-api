import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://dariocscs:<db_password>@guardianesjusticia.qnbam.mongodb.net/?retryWrites=true&w=majority&appName=GuardianesJusticia`
    );
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
