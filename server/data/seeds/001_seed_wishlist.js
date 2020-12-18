exports.seed = function (knex) {
  return knex('wishlist')
    .del()
    .then(() => {
      return knex('wishlist').insert([
        { name: "Bob's wishlist", author: 'Bob' },
        { name: "Allens's wishlist", author: 'Allen' },
        { name: "Gavin's wishlist", author: 'Gavin' },
        { name: "Tim's wishlist", author: 'Tim' },
        { name: "Dave's wishlist", author: 'Dave' },
        { name: "Sarah's wishlist", author: 'Sarah' },
      ]);
    });
};
