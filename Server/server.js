const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const categories = [
  { id: 1, name: "Andarkali Suit1", imageUrl: "/pictures/game.jpg" },
  { id: 2, name: "Andarkali Suit2", imageUrl: "/pictures/game.jpg" },
  { id: 3, name: "Andarkali Suit3", imageUrl: "/pictures/game.jpg" },
  { id: 4, name: "Andarkali Suit4", imageUrl: "/pictures/game.jpg" },
  { id: 5, name: "Andarkali Suit5", imageUrl: "/pictures/game.jpg" },
  // Add other categories here
];

const products = [
  { id: 1, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  { id: 2, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  { id: 3, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  { id: 4, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  { id: 5, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  { id: 6, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  { id: 7, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  { id: 8, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  { id: 9, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  { id: 10, name: "Navy Blue Sulphur Cotton Twill Shirt", price: "₹1399", oldPrice: "₹2999", discount: "53% off", imageUrl: "/pictures/game.jpg" },
  // Add other products here
];

app.get('/categories', (req, res) => {
  res.json(categories);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
