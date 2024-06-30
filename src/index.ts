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


// app.get("/shoes/:id", (c) => {
//   const id = Number(c.req.param('id'));
//   const shoe = shoes.find((s) => s.id === id);

//   if (!shoe) {
//     return c.json({ message: "Shoe not found" }, 404);
//   }

//   return c.json(shoe);
// });


// app.delete("/shoes/:id", (c) => {
//   const id = Number(c.req.param("id"));

//   if (!id) {
//     return c.json({ message: "Shoe not found" });
//   }

//   const shoeId = shoes.map((shoe)=> shoe.id);

//   if (!shoeId.includes(id)){
//     return c.json({ message: "shoe to be deleted not found" });
//   }

//   const deletedShoe = shoes.find((shoe) => shoe.id === id);
//   shoes = shoes.filter((shoe) => shoe.id !== id);

//   return c.json({
//     message: `${deletedShoe?.brand} ${deletedShoe?.model} has been deleted successfully`,
//   });
// });

export default app
