exports.seed = function (knex) {
  return knex('item')
    .del()
    .then(() => {
      return knex('item').insert([
        { id: 1, wishlist_id: 1, name: 'skateboard' },
        { id: 2, wishlist_id: 1, name: 'toothbrush' },
        { id: 3, wishlist_id: 2, name: 'coal' },
        { id: 4, wishlist_id: 3, name: 'gavel' },
        { id: 5, wishlist_id: 3, name: '4K TV' },
        { id: 6, wishlist_id: 3, name: 'Vive' },
        { id: 7, wishlist_id: 4, name: 'People to stop calling him Tim-Tim' },
        { id: 8, wishlist_id: 4, name: 'tissue box' },
        { id: 9, wishlist_id: 4, name: 'plate' },
        { id: 10, wishlist_id: 5, name: 'remote' },
        { id: 11, wishlist_id: 5, name: 'pair of socks' },
        { id: 12, wishlist_id: 5, name: 'key' },
        { id: 13, wishlist_id: 6, name: 'coffee mug' },
        { id: 14, wishlist_id: 6, name: 'tennis ball' },
        { id: 15, wishlist_id: 6, name: 'tiger' },
      ]);
    });
};
