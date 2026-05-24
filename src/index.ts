import express from 'express';
const app = express();
app.use(express.json());

const PIZZA_INGREDIENTS = new Set([
  "mozzarella", "pepperoni", "mushrooms", "bell peppers", "onions",
  "black olives", "green olives", "tomato sauce", "basil", "oregano",
  "sausage", "bacon", "ham", "pineapple", "jalapeños",
  "spinach", "artichokes", "sun-dried tomatoes", "anchovies", "roasted garlic",
  "ricotta", "parmesan", "feta", "gouda", "cheddar",
  "chicken", "ground beef", "salami", "prosciutto", "arugula"
]);

app.post('/check-ingredient', (req, res) => {
  const ingredient = (req.body.ingredient || req.body.args?.ingredient || '').toLowerCase().trim();
  const eligible = PIZZA_INGREDIENTS.has(ingredient);
  res.json({ eligible });
});
export default app;
