const client = {
  handleGetWishlists: () =>
    fetch('http://localhost:3001/wishlist', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  handleSendWishlist: (wishlist) =>
    fetch('http://localhost:3001/wishlist', {
      method: 'POST',
      body: JSON.stringify(wishlist),
      headers: {
        'Content-Type': 'application/json',
      },
    }),
};

module.exports = client;
