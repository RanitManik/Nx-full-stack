import express from "express";

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = express();

app.get("/", (req, res) => {
    res.send({ message: "Hello from backend" });
});

app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
});
