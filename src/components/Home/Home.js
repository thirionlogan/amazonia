import React, { useState, useEffect } from "react";
import PageHeader from "../PageHeader/PageHeader";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { CenterFocusStrong } from "@material-ui/icons";
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: '50px',
    // marginLeft: '100px',
    display: 'flex',
    width: '100%',
    backgroundColor: 'grey',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  box: {
    width: '50px'
  }
}));

const wishlistAccordians = (wishlists) =>{
    return(
    wishlists.map((wishlist) => {
    return (
      <Accordion id={wishlist.author} key={wishlist.id} className={useStyles.box}>
        <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={useStyles.heading}>{wishlist.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {wishlist.items.map((item) => {
            return (
              <Typography key={item.id}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // onChange={handleChange}
                        name={item.name}
                      />
                    }
                    label={item.name}
                  />
                </FormGroup>
              </Typography>
            );
          })}
        </AccordionDetails>
      </Accordion>
    );
  }))};
  
  

const Home = () => {
      const wishlists = [
        {
          id: 1,
          name: "Bob's wishlist",
          author: "Bob12",
          items: [
            { id: 1, wishlist_id: 1, name: "skateboard" },
            { id: 2, wishlist_id: 1, name: "toothbrush" },
          ],
        },
        {
          id: 2,
          name: "Allens's wishlist",
          author: "Allen",
          items: [{ id: 3, wishlist_id: 2, name: "coal" }],
        },
      ];  

  const [wishlist, setWishList] = useState(wishlists);

  useEffect( () => {
      console.log("I was called ");
        fetch("http://localhost:3001/wishlist")
        .then((response) => response.json())
        .then((data) => {
            console.log(`I GOTS THA DATAS!!!! ${data}`);
            return setWishList(data)
        })
        .catch((err) => console.log(`I CANT FINDS THA DATAS!!!!`))
        })

  const classes = useStyles();
  return (
    <>
      <PageHeader />
      <div className={classes.root}>{wishlistAccordians(wishlist)}</div>
    </>
  );
};

export default Home;
