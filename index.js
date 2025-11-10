import express from "express"; // importe express
import cors from "cors"; // importe le module cors : "Cross Origin Resource Sharing"
const app = express(); // crée l'application express
const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

app.use(cors({ origin: ["http://localhost:5173"] }));

// route principale
app.get("/api/employees", (req, res) => {
  res.json({ results: [sampleEmployee] });
});

const port = 3310; // choisit un port

// démarre le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
