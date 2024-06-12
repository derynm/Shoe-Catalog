# Shoe Catalog

A Shoes Catalog is a comprehensive, organized collection providing detailed information on various footwear products, including brands, models, prices, sizes, colors, and materials

## Specification

| Endpoint     | HTTP     | Description           |
| ------------ | -------- | --------------------- |
| `/shoes`     | `GET`    | Get all shoes         |
| `/shoes/:id` | `GET`    | Get one shoe by id    |
| `/shoes`     | `POST`   | Add new shoe          |
| `/shoes`     | `DELETE` | Delete all shoes      |
| `/shoes/:id` | `DELETE` | Delete one shoe by id |
| `/shoes/:id` | `PUT`    | Update one shoe by id |

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

```sh
bun dev
```

Open <http://localhost:3000>
