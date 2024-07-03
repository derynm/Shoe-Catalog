import { Hono } from 'hono'

import { prisma } from "../libs/prisma";

const color = new Hono()

color.get('/', async (c) => {
    const colors = await prisma.color.findMany();
    return c.json(colors);
})

color.get("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const color = await prisma.color.findUnique({
        where: {
            id
        }
    });

    if (!color) {
        return c.json({ message: "Color not found" }, 404);
    }

    return c.json(color);
})

color.post('/', async (c) => {
    const { name } = await c.req.json();

    try {
        const newColor = await prisma.color.create({
            data: { name },
        });

        return c.json(newColor, 201);
    } catch (error) {
        console.error(error);
        return c.json({ error: 'Failed to create color' }, 400);
    }
});

color.put("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const { name } = await c.req.json();

    const updatedColor = await prisma.color.update({
        where: {
            id
        },
        data: {
            name
        }
    });

    return c.json(updatedColor);
})

color.delete("/:id", async (c) => {
    const id = Number(c.req.param('id'));
    const color = await prisma.color.delete({
        where: {
            id
        }
    });

    return c.json(color);
})

export default color

