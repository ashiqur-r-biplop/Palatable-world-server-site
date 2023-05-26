const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


const chefData = require("./data/chef.json");
const recipesData = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("this is my assignment server");
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  if (id == "all") {
    res.send(chefData);
  } else {
    const singleChef = chefData.find((c) => c.id == id);
    res.send(singleChef);
  }
});

app.get("/recipes", (req, res) => {
  res.send(recipesData);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  if (id == "all") {
    res.send(recipesData);
  } else{
    const chefCatagories = recipesData.filter(data => data.recipe_id == id)
    res.send(chefCatagories)
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
