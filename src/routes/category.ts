import { Hono } from 'hono'

import { prisma } from "../libs/prisma";

const category = new Hono()

category.get('/',async (c) => {
    const categories = await prisma.category.findMany();
    return c.json(categories);
})

category.get("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const category = await prisma.category.findUnique({
        where:{
            id
        }
    });

    if (!category) {
        return c.json({ message: "Category not found" }, 404);
    }

    return c.json(category);
})

category.post('/', async (c) => {
    const { name } = await c.req.json();

    try {
        const newCategory = await prisma.category.create({
            data: { name },
        });

        return c.json(newCategory, 201);
    } catch (error) {
        console.error(error);
        return c.json({ error: 'Failed to create category' }, 400);
    }
});

category.put("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const { name } = await c.req.json();

    const updatedCategory = await prisma.category.update({
        where: {
            id
        },
        data: {
            name
        }
    });

    return c.json(updatedCategory);
})

category.delete("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const category = await prisma.category.delete({
        where: {
            id
        }
    });

    return c.json(category);
})

export default category