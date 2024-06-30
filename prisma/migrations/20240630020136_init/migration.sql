-- CreateTable
CREATE TABLE "Shoe" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "brand_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Shoe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "shoe_id" INTEGER NOT NULL,
    "color_id" INTEGER NOT NULL,
    "size_id" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shoe" ADD CONSTRAINT "Shoe_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shoe" ADD CONSTRAINT "Shoe_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_shoe_id_fkey" FOREIGN KEY ("shoe_id") REFERENCES "Shoe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
