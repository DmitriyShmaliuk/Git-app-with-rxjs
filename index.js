const express = require("express");
const path = require("path");
const { DEFAULT_PORT } = require("./constants");
const homeRoutes = require("./routes/homeRoutes");

const PORT = process.env.PORT || DEFAULT_PORT;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
