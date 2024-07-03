import { Hono } from 'hono'

import { prisma } from "../libs/prisma";

const brand = new Hono()


brand.get('/', async (c) => {
    const brands = await prisma.brand.findMany();
    return c.json(brands);
})

brand.get("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const brand = await prisma.brand.findUnique({
        where: {
            id
        }
    });

    if (!brand) {
        return c.json({ message: "Brand not found" }, 404);
    }

    return c.json(brand);
})

brand.post('/', async (c) => {
    const { name } = await c.req.json();

    try {
        const newBrand = await prisma.brand.create({
            data: { name },
        });

        return c.json(newBrand, 201);
    } catch (error) {
        console.error(error);
        return c.json({ error: 'Failed to create brand' }, 400);
    }
});

brand.put("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const { name } = await c.req.json();

    const updatedBrand = await prisma.brand.update({
        where: {
            id
        },
        data: {
            name
        }
    });

    return c.json(updatedBrand);
})

brand.delete("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const brand = await prisma.brand.delete({
        where: {
            id
        }
    });

    return c.json({
        message: "Brand deleted",
        data: brand
    });
})

export default brand;