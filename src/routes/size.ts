import { Hono } from 'hono'

import { prisma } from "../libs/prisma";

const size = new Hono()

size.get('/', async (c) => {
    const sizes = await prisma.size.findMany();
    return c.json(sizes);
})

size.get("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const size = await prisma.size.findUnique({
        where: {
            id
        }
    });

    if (!size) {
        return c.json({ message: "Size not found" }, 404);
    }

    return c.json(size);
})

size.post('/', async (c) => {
    const { name } = await c.req.json();

    try {
        const newSize = await prisma.size.create({
            data: { name },
        });

        return c.json(newSize, 201);
    } catch (error) {
        console.error(error);
        return c.json({ error: 'Failed to create size' }, 400);
    }
});

size.put("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const { name } = await c.req.json();

    const updatedSize = await prisma.size.update({
        where: {
            id
        },
        data: {
            name
        }
    });

    return c.json(updatedSize);
})

size.delete("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const size = await prisma.size.delete({
        where: {
            id
        }
    });

    return c.json(size);
})

export default size