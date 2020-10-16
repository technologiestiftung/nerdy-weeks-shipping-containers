import express, { Request, Response, NextFunction } from "express";
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
    res.json({ url: req.url });
  }),
);
app.post(
  "/foods",
  asyncWrapper(async (req, res) => {
    res.json({ url: req.url });
  }),
);
app.get(
  "/foods/:foodId([0-9]+)",
  asyncWrapper(async (req, res) => {
    res.json({ url: req.url });
  }),
);
app.get(
  "/foods/:foodId([0-9]+)/fruits",
  asyncWrapper(async (req, res) => {
    res.json({ url: req.url });
  }),
);
app.post(
  "/foods/:foodId([0-9]+)/fruits",
  asyncWrapper(async (req, res) => {
    res.json({ url: req.url });
  }),
);
app.get(
  "/foods/:foodId([0-9]+)/fruits/:fruitId([0-9]+)",
  asyncWrapper(async (req, res) => {
    res.json({ url: req.url });
  }),
);
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
