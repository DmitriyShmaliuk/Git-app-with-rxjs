const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");
const { PORT } = require("./keys");
const homeRoutes = require("./routes/homeRoutes");

const app = express();

app.engine("hbs", exphbs());
app.set("view engine", "hbs");

app.use(compression());
app.use(helmet({ contentSecurityPolicy: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
