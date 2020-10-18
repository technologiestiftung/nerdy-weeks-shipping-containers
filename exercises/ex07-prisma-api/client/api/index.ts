import { PrismaClient } from "@prisma/client";

import express, { Request, Response, NextFunction } from "express";
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

// taken from https://zellwk.com/blog/async-await-express/
export function asyncWrapper(
  callback: (req: Request, res: Response, next: NextFunction) => Promise<void>,
): (req: Request, res: Response, next: NextFunction) => void {
  return function (req, res, next): void {
    callback(req, res, next).catch(next);
  };
}

app.get(
  "/foods",
  asyncWrapper(async (req, res) => {
    const foods = await prisma.food.findMany();
    res.json({ data: foods });
  }),
);
app.post(
  "/foods",
  asyncWrapper(async (req, res) => {
    const { body } = req;
    const food = await prisma.food.create({
      data: { name: body.name },
    });
    res.json({ data: food });
  }),
);
app.get(
  "/foods/:foodId([0-9]+)",
  asyncWrapper(async (req, res) => {
    const food = await prisma.food.findOne({
      where: { id: parseInt(req.params.foodId) },
    });
    res.json({ data: food });
  }),
);
app.get(
  "/foods/:foodId([0-9]+)/fruits",
  asyncWrapper(async (req, res) => {
    const fruits = await prisma.fruit.findMany({
      where: { foodId: parseInt(req.params.foodId) },
    });
    res.json({ data: fruits });
  }),
);
app.post(
  "/foods/:foodId([0-9]+)/fruits",
  asyncWrapper(async (req, res) => {
    req.body;
    const fruit = await prisma.fruit.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        Food: {
          connect: { id: parseInt(req.params.foodId) },
        },
      },
    });
    res.json({ data: fruit });
  }),
);
app.get(
  "/foods/:foodId([0-9]+)/fruits/:fruitId([0-9]+)",
  asyncWrapper(async (req, res) => {
    const fruit = await prisma.food
      .findOne({
        where: { id: parseInt(req.params.foodId) },
      })
      .fruits({ where: { id: parseInt(req.params.fruitId) } });
    res.json({ data: fruit });
  }),
);
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
