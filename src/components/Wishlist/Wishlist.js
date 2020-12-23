import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  formControlLabel: {
    labelPlacement: 'end',
  },
});

const Wishlist = ({ wishlist, handleDeleteWishlist, expanded = false }) => {
  const { name, author, items, id } = wishlist;
  const [wishlistExpanded, setWishlistExpanded] = useState(expanded);

  const deleteWishlist = () => {
    handleDeleteWishlist(id);
  };

  const handleWishlistOpen = (event, expanded) => {
    setWishlistExpanded(expanded);
  };

  return (
    <Accordion expanded={wishlistExpanded} onChange={handleWishlistOpen}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>{`${name} by ${author}`}</Typography>
        {wishlistExpanded ? (
          <IconButton
            aria-label='delete'
            id='deleteButton'
            onClick={deleteWishlist}
          >
            <DeleteIcon />
          </IconButton>
        ) : null}
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {items.map((item, index) => {
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
};
export default Wishlist;
