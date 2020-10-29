const { Router } = require("express");
const axios = require("axios");
const { SEARCH_REQUEST } = require("../constants");

const router = Router();

const pageInfo = {
  userName: "",
  users: [],
};

router.get("/", (req, res) => {
  res.render("index", {
    ...pageInfo,
  });
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    const { data } = await axios.get(SEARCH_REQUEST + name.trim());
    const { items: users } = data;

    pageInfo.userName = name;
    pageInfo.users = users.map(({ login, avatar_url, html_url}) => ({
      name: login,
      avatar: avatar_url,
      profileLink: html_url
    }));

    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
});

module.exports = router;
