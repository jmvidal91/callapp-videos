import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// sirve todos los archivos de la raíz del repo: index.html, video1.mp4, video2.mp4
app.use(express.static(__dirname, {
  maxAge: "1d",
  extensions: ["html"]
}));

// fallback 404
app.use((req, res) => res.status(404).send("Not Found"));

app.listen(port, () => {
  console.log(`CallApp videos escuchando en http://0.0.0.0:${port}`);
});
