import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Fab,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

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
              <Accordion key={`Accordian${index}`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>
                    {`${wishlist.name} by ${wishlist.author}`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    {wishlist.items.map((item, index) => {
                      return (
                        <FormControlLabel
                          key={`WishlistItemCheckbox${index}`}
                          control={<Checkbox />}
                          label={item.name}
                        />
                      );
                    })}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
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
