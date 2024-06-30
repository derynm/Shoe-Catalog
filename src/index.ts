import { Hono } from 'hono'
import { prisma } from "./libs/prisma";



const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: "Shoe Catalog API",
  });
})

app.get("/shoes", async (c) => {
  const shoes = await prisma.shoe.findMany({
    include:{
      brand: true,
      category: true,
      Stock: true
    }
  });
  return c.json(shoes);
});

app.get("/shoes/:id", async (c) => {
  const id = Number(c.req.param('id'));
  const shoe = await prisma.shoe.findUnique({
    where:{
      id
    },
    include:{
      brand: true,
      category: true,
      Stock: true
    }
  });

  if (!shoe) {
    return c.json({ message: "Shoe not found" }, 404);
  }

  return c.json(shoe);
})
app.delete("/shoes/:id", async (c) => {
  const id = Number(c.req.param('id'));
  const shoe = await prisma.shoe.delete({
    where:{
      id
    }
  });

  return c.json(shoe);
})

export default app
