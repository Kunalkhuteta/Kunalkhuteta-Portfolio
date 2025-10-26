const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Contact = require("./models/Contact");

// ✅ Load environment variables first
dotenv.config();

const app = express();
app.use(cors({
  origin: ["https://kunalkhuteta-portfolio.vercel.app", "http://localhost:8080",], 
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
console.log("MONGO_URI value:", process.env.MONGO_URI);

// ✅ Use process.env after dotenv.config()
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res
      .status(201)
      .json({ success: true, message: "Contact message saved successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

// const PORT =10000;
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
