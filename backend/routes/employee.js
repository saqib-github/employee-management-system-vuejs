import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("user route");
});

export default router;
