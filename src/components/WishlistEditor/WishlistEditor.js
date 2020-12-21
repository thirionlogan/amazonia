import React, { useState } from 'react';
import { Paper, TextField, Button, FormControl } from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

import './WishlistEditor.css';

const useStyles = makeStyles({
  wishlistEditorContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: '50%',
    padding: '3%',
  },
  input: {
    marginBottom: '16px',
  },
});

const WishlistEditor = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [items, setItems] = useState(['']);
  const [nameErrorText, setNameErrorText] = useState('');
  const [authorErrorText, setAuthorErrorText] = useState('');
  const [itemErrorText, setItemErrorText] = useState('');

  const handleNameChange = (event) => {
    setNameErrorText('');
    setName(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthorErrorText('');
    setAuthor(event.target.value);
  };

  const handleItemsChange = (index, event) => {
    setItemErrorText('');
    items[index] = event.target.value;
    if (items[items.length - 1].trim()) items.push('');
    setItems([...items]);
  };

  const handleSubmit = (event) => {
    if (validateInput()) sendWishlist();
  };

  const sendWishlist = () => {
    const filteredItems = items
      .map((item) => item.trim())
      .filter((item) => item);

    const data = {
      name,
      author,
      items: filteredItems,
    };

    fetch('http://localhost:3001/wishlist', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const validateInput = () => {
    if (!name) {
      setNameErrorText('Name is required');
    }
    if (!author) {
      setAuthorErrorText('Author is required');
    }
    if (!items.filter((item) => item).length) {
      setItemErrorText('At least one item is required');
    }
    if (name && author && items.filter((item) => item).length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={classes.wishlistEditorContainer}>
      <h1>Make a Wishlist</h1>
      <Paper className={classes.paper}>
        <FormControl>
          <TextField
            className={classes.input}
            error={nameErrorText ? true : false}
            helperText={nameErrorText}
            id='nameInput'
            label='Wishlist Name'
            onChange={handleNameChange}
            value={name}
          />
          <TextField
            className={classes.input}
            error={authorErrorText ? true : false}
            helperText={authorErrorText}
            id='authorInput'
            label='Author'
            onChange={handleAuthorChange}
            value={author}
          />
          {items.map((item, index) => {
            return (
              <TextField
                className={classes.input}
                error={itemErrorText ? true : false}
                helperText={itemErrorText}
                key={`itemInput${index + 1}`}
                id={`itemInput${index + 1}`}
                label='Item'
                value={item}
                onChange={(event) => {
                  handleItemsChange(index, event);
                }}
              />
            );
          })}
          <Button
            id='saveButton'
            variant='contained'
            color='primary'
            startIcon={<SaveIcon />}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
};

export default WishlistEditor;
