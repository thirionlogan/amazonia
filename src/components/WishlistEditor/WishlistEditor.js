import React, { useState } from 'react';
import { Paper, TextField, Button, FormControl } from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';

import './WishlistEditor.css';

const WishlistEditor = () => {
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
    <div>
      <h1>Make a Wishlist</h1>
      <Paper>
        <FormControl>
          <TextField
            error={nameErrorText ? true : false}
            helperText={nameErrorText}
            id='nameInput'
            label='Wishlist Name'
            onChange={handleNameChange}
            value={name}
          />
          <TextField
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
