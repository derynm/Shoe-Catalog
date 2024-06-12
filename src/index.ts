import { Hono } from 'hono'
import { shoesData } from './data/shoes'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: "Shoe Catalog API",
  });
})

app.get("/shoes", (c) => {
  return c.json(shoesData);
});

app.get("/shoes/:id", (c) => {
  const id = Number(c.req.param('id'));
  const shoe = shoesData.find((s) => s.id === id);

  if (!shoe) {
    return c.json({ message: "Shoe not found" }, 404);
  }

  return c.json(shoe);
});

export default app
