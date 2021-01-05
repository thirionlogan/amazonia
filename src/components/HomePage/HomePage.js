import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Fab } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import Wishlist from '../Wishlist/Wishlist';
import { handleDeleteWishlist } from '../../client/client';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  floatingActionButton: {
    margin: theme.spacing(1),
  },
  wishlistContainer: {
    width: '50vw',
  },
}));

const HomePage = ({ handleGetWishlists }) => {
  const classes = useStyles();
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    handleGetWishlists()
      .then((res) => res.json())
      .then(setWishlists);
  }, [handleGetWishlists]);
  return (
    <div className={classes.homeContainer}>
      <div className={classes.controlContainer}>
        <div className={classes.wishlistContainer}>
          {wishlists.map((wishlist, index) => {
            return (
              <Wishlist
                wishlist={wishlist}
                handleDeleteWishlist={handleDeleteWishlist}
                key={`Accordian${index}`}
              />
            );
          })}
        </div>
        <Link to='/wishlistEditor'>
          <Fab
            color='primary'
            aria-label='add'
            className={classes.floatingActionButton}
          >
            <AddIcon />
          </Fab>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
