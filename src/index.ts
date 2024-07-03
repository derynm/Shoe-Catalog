import { Hono } from 'hono'

import shoe from './routes/shoe'
import brand from "./routes/brand"
import category from "./routes/category"
import color from './routes/color'
import size from './routes/size'



const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: "Shoe Catalog API",
  });
})

app.route("/shoes",shoe)
app.route("/brands",brand)
app.route("/categories",category)
app.route("/colors",color)
app.route("/sizes",size)

export default app
