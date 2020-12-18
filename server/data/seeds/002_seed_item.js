exports.seed = function (knex) {
  return knex('item')
    .del()
    .then(() => {
      return knex('item').insert([
        { wishlist_id: 1, name: 'skateboard' },
        { wishlist_id: 1, name: 'toothbrush' },
        { wishlist_id: 2, name: 'coal' },
        { wishlist_id: 3, name: 'gavel' },
        { wishlist_id: 3, name: '4K TV' },
        { wishlist_id: 3, name: 'Vive' },
        { wishlist_id: 4, name: 'People to stop calling him Tim-Tim' },
        { wishlist_id: 4, name: 'tissue box' },
        { wishlist_id: 4, name: 'plate' },
        { wishlist_id: 5, name: 'remote' },
        { wishlist_id: 5, name: 'pair of socks' },
        { wishlist_id: 5, name: 'key' },
        { wishlist_id: 6, name: 'coffee mug' },
        { wishlist_id: 6, name: 'tennis ball' },
        { wishlist_id: 6, name: 'tiger' },
      ]);
    });
};
