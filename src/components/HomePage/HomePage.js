import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const HomePage = ({ handleGetWishlists }) => {
  const classes = useStyles();
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    handleGetWishlists().then((data) => {
      setWishlists(data);
    });
  }, []);

  useEffect(() => {
    console.log('rerender', wishlists);
  }, [wishlists]);

  return (
    <div>
      {wishlists.map((wishlist) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={useStyles.heading}>
                {wishlist.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default HomePage;
