import express from "express";
import dotenv from "dotenv";
import path from "path"

const app = express();
dotenv.config();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../../client/build")));

if (process.env.NODE_ENV === "production") {

  app.get("*", (req, res) => {

    res.sendFile(path.join(__dirname, "../../client/build/index.html"));

  });

}

app.listen(port, () => {
    console.log(`listening on PORT: ${port}`);
});


export default app;

