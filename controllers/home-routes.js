const router = require("express").Router();

const { Plant, Comment, Vote, User } = require("../models");

const withAuth = require("../utils/auth");
console.log("hello");

/** TODO: Render plants to homepage */
router.get("/", async (req, res) => {
  try {
    const plantsData = await Plant.findAll({
      include: [
        {
          model: Comment,
          include: [{ model: Vote }, { model: User, attributes: ["username"] }],
        },
        { model: User, attributes: ["username"] },
      ],
    });
    const plants = plantsData.map((plant) => plant.get({ plain: true }));
    console.log("plants", plants.comments);
    res.render("feed", { plants, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/askAdvice", (req, res) => {
  res.render("plant-form", { loggedIn: req.session.loggedIn });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
module.exports = router;
