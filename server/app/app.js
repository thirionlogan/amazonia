const express = require("express");
const Promise = require("bluebird");
var cors = require("cors");
const app = express();
const { WishList, WishListItem } = require("../models");
const errorHandler = require("../middleware/errorHandler");

app.use(express.json());
app.use(errorHandler);
app.use(cors());

const getAllWishlists = async () => {
  return WishList.fetchAll({ withRelated: ["items"], require: true });
};

const getWishlistById = async (id) => {
  return WishList.where("id", "=", id).fetch({
    withRelated: ["items"],
    require: true,
  });
};

const createWishlist = async ({ name, author, items }) => {
  return new WishList({ name, author })
    .save(null, {
      require: true,
      method: "insert",
    })
    .then(({ id }) => {
      return Promise.all(
        items.map((item) => {
          return new WishListItem({ name: item, wishlist_id: id }).save(null, {
            require: true,
            method: "insert",
          });
        })
      );
    });
};

const deleteWishlist = async (id) => {
  return new WishList({ id }).destroy({ require: true });
};

const updateWishlist = async (id, { name, author }) => {
  return new WishList({ id, name, author }).save(null, {
    require: true,
    method: "update",
  });
};

const getFilteredWishlists = async (query) => {
  return WishList.query(function (qb) {
    qb.where("author", "=", `${query}`)
      .orWhere("name", "=", `${query}`)
  }).fetch({ withRelated: ["items"], require: true });
};

app.get("/search", async (req, res) => {
  const query = decodeURIComponent(req.query.query);
  getFilteredWishlists(query)
    .then((wishlists) => {
      res.status(200).send(wishlists);
    })
    .catch((error) => {
      res.status(500).send();
    });
});

app.get("/wishlist", async (req, res) => {
  getAllWishlists()
    .then((wishlists) => {
      res.status(200).send(wishlists);
    })
    .catch((error) => {
      res.status(500).send();
    });
});

app.get("/wishlist/:id", async (req, res) => {
  return getWishlistById(req.params.id)
    .then((wishlist) => {
      res.status(200).send(wishlist);
    })
    .catch((error) => {
      res.status(500).send();
    });
});

app.post("/wishlist", (req, res) => {
  createWishlist(req.body)
    .then((wishlist) => {
      res.status(201).send({ message: "Your wishlist has been created!" });
    })
    .catch((error) => {
      res.status(500).send();
    });
});

app.delete("/wishlist/:id", (req, res) => {
  deleteWishlist(req.params.id)
    .then(() => {
      res
        .status(200)
        .send({ message: `Wishlist ${req.params.id} has been deleted` });
    })
    .catch((error) => {
      res.status(500).send();
    });
});

app.put("/wishlist/:id", (req, res) => {
  updateWishlist(req.params.id, req.body)
    .then(() => {
      res
        .status(200)
        .send({ message: `Wishlist ${req.params.id} has been updated` });
    })
    .catch((error) => {
      res.status(500).send();
    });
});

module.exports = app;