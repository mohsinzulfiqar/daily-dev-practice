# MongoDB Schema Guide

A **Schema** defines the structure of documents within a MongoDB collection.  
It acts as a blueprint that specifies:

- Field types  
- Validation rules  
- Default values  
- Other constraints  

---

## Schema Types

### 1. String Type

```js
const stringSchema = new mongoose.Schema({
   // Basic string (no constraints)
  name: String,

  // String with validation and indexing
  email: {
    type: String,
    required: true,
    unique: true, // ensures no duplicate emails
    lowercase: true, // converts email to lowercase before saving
    trim: true, // removes leading/trailing spaces
    index: true, // improves query performance
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'], // regex validation
  },

  // String with predefined values
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'], // only these values allowed
    default: 'pending', // sets default if not provided
  },

  // String with length constraints and indexing
  username: {
    type: String,
    minlength: 3, // must be at least 3 characters
    maxlength: 20, // cannot exceed 20 characters
    required: true,
    unique: true,  // ensures no duplicate usernames
    index: true,   // speeds up searches by username
    trim: true,    // avoids accidental spaces
  },

  // Automatically converted to uppercase
  role: {
    type: String,
    uppercase: true, // converts to uppercase before saving
    default: 'USER',
  },

  // Cannot be changed once created
  createdBy: {
    type: String,
    immutable: true, // ensures the value cannot be updated later
  },

  // Custom validation
  nickname: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9]+$/.test(v); // only letters & numbers
      },
      message: props => `${props.value} is not a valid nickname!`,
    },
    default: 'guest', // fallback value
  },

  // Example of full-text search field
  bio: {
    type: String,
    index: 'text', // enables text search (for searching words/phrases)
  },
});

