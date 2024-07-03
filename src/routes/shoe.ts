import { Hono } from 'hono'

import { prisma } from "../libs/prisma";

const shoe = new Hono()

shoe.get("/", async (c) => {
    const shoes = await prisma.shoe.findMany({
        include: {
            brand: true,
            category: true,
            Stock: true
        }
    });
    return c.json(shoes);
});

shoe.post("/", async (c) => {
    const body = await c.req.json();
    const { model, price, description, image_url, brand_id, category_id, stocks } = body;

    try {
        const newShoe = await prisma.shoe.create({
            data: {
                model,
                price,
                description,
                image_url,
                brand: {
                    connect: {
                        id: brand_id
                    }
                },
                category: {
                    connect: {
                        id: category_id
                    }
                },
                Stock: {
                    create: stocks.map((stock: any) => ({
                        quantity: stock.quantity,
                        color: {
                            connect: { id: stock.color_id },
                        },
                        size: {
                            connect: { id: stock.size_id },
                        },
                    })),
                },
            }
        });

        return c.json(newShoe, 201);
    } catch (error) {
        return c.json({ error: 'Failed to create shoe' }, 400);
    }
})

shoe.get("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const shoe = await prisma.shoe.findUnique({
        where: {
            id
        },
        include: {
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

shoe.delete("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const shoe = await prisma.shoe.delete({
        where: {
            id
        }
    });

    return c.json(shoe);
})

shoe.get("/:id/stock", async (c) => {
    const id = Number(c.req.param('id'));
    const stock = await prisma.stock.findMany({
        where: {
            shoe_id: id
        },
        include: {
            color: true,
            size: true
        }
    });

    return c.json(stock);
})

export default shoe