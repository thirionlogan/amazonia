import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    width: '50%',
  },
}));

const HomePage = ({ handleGetWishlists }) => {
  const classes = useStyles();
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    handleGetWishlists()
      .then((res) => res.json())
      .then(setWishlists);
  }, []);

  return (
    <div className={classes.homeContainer}>
      {wishlists.map((wishlist, index) => {
        return (
          <Accordion key={`Accordian${index}`} className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>
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
  );
};

export default HomePage;
