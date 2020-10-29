const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const { DEFAULT_PORT } = require("./constants");
const homeRoutes = require("./routes/homeRoutes");

const PORT = process.env.PORT || DEFAULT_PORT;
const app = express();

app.engine("hbs", exphbs());
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
