import { Hono } from 'hono'
import { shoesData } from './data/shoes'


let shoes = shoesData
const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: "Shoe Catalog API",
  });
})

app.get("/shoes", (c) => {
  return c.json(shoes);
});

app.get("/shoes/:id", (c) => {
  const id = Number(c.req.param('id'));
  const shoe = shoes.find((s) => s.id === id);

  if (!shoe) {
    return c.json({ message: "Shoe not found" }, 404);
  }

  return c.json(shoe);
});


app.delete("/shoes/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "Shoe not found" });
  }

  const shoeId = shoes.map((shoe)=> shoe.id);

  if (!shoeId.includes(id)){
    return c.json({ message: "shoe to be deleted not found" });
  }

  const deletedShoe = shoes.find((shoe) => shoe.id === id);
  shoes = shoes.filter((shoe) => shoe.id !== id);

  return c.json({
    message: `${deletedShoe?.brand} ${deletedShoe?.model} has been deleted successfully`,
  });
});

export default app
