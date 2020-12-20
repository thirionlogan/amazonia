const db = require('./data/db');
const bookshelf = require('bookshelf')(db);

const WishList = bookshelf.model('Wishlist', {
  tableName: 'wishlist',
  items() {
    return this.hasMany(WishListItem);
  },
});

const WishListItem = bookshelf.model('WishListItem', {
  tableName: 'item',
  wishlist() {
    return this.belongsTo(WishList);
  },
});

exports.WishList = WishList;
exports.WishListItem = WishListItem;
exports.Bookshelf = bookshelf;
