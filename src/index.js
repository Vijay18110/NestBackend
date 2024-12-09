const express = require("express");
const { router } = require("./routers/productsRoutes");
const app = express();
app.use(express.json());
app.use("/api/v1", router);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
