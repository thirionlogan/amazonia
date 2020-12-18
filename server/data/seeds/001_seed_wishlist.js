exports.seed = function (knex) {
  return knex('wishlist')
    .del()
    .then(() => {
      return knex('wishlist').insert([
        { id: 1, name: "Bob's wishlist", author: 'Bob' },
        { id: 2, name: "Allens's wishlist", author: 'Allen' },
        { id: 3, name: "Gavin's wishlist", author: 'Gavin' },
        { id: 4, name: "Tim's wishlist", author: 'Tim' },
        { id: 5, name: "Dave's wishlist", author: 'Dave' },
        { id: 6, name: "Sarah's wishlist", author: 'Sarah' },
      ]);
    });
};
