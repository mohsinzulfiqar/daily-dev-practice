# 📘 Mongoose Number Schema Guide

This guide provides an in-depth overview of using the **Number type** in Mongoose schemas, including use cases, options, validators, advanced techniques, and best practices.

---

## 📑 Table of Contents
- [Overview](#overview)
- [Basic Number Schema Definition](#basic-number-schema-definition)
- [Use Cases and Examples](#use-cases-and-examples)
  - [1. Age/Demographic Data](#1-agedemographic-data)
  - [2. Financial/Currency Values](#2-financialcurrency-values)
  - [3. Counters and Statistics](#3-counters-and-statistics)
  - [4. Ratings and Scores](#4-ratings-and-scores)
  - [5. Coordinates and Geographic Data](#5-coordinates-and-geographic-data)
  - [6. Inventory and Quantity Management](#6-inventory-and-quantity-management)
  - [7. Time-based Numbers](#7-time-based-numbers-duration-timestamps)
  - [8. Percentage Values](#8-percentage-values)
- [Schema Options and Validators](#schema-options-and-validators)
  - [Common Options](#common-options)
  - [Custom Validators](#custom-validators)
  - [Getters and Setters](#getters-and-setters)
- [Advanced Number Use Cases](#advanced-number-use-cases)
  - [1. Array of Numbers](#1-array-of-numbers)
  - [2. Calculated/Virtual Numbers](#2-calculatedvirtual-numbers)
  - [3. Number with Custom Transformation](#3-number-with-custom-transformation)
- [Complete Module Schema Example](#complete-module-schema-example)
- [Best Practices](#best-practices)
- [Common Pitfalls](#common-pitfalls)

---

## Overview
The **Number type** in Mongoose schemas is used to store numeric values in MongoDB.  
It maps to JavaScript's `Number` type and supports:
- Integers
- Floating-point numbers
- Special numeric values (`NaN`, `Infinity`, etc.)

---

## Basic Number Schema Definition
```javascript
const mongoose = require('mongoose');

// Basic number field
const userSchema = new mongoose.Schema({
  age: Number,
  // with explicit type definition
  salary: {
    type: Number
  }
});
```
---

## Use Cases and Examples

### 1. Age/Demographic Data
```javascript
const userSchema = new mongoose.Schema({
  age: { type: Number, min: 0, max: 150, required: true },
  weight: { type: Number, min: 0, max: 1000 },
  height: { type: Number, min: 0, max: 300 }
});
```

### 2. Financial/Currency Values
```javascript
const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
    min: 0,
    get: v => Math.round(v * 100) / 100,
    set: v => Math.round(v * 100) / 100
  },
  discount: { type: Number, min: 0, max: 100, default: 0 },
  tax: { type: Number, min: 0, default: 0 }
});
```

### 3. Counters and Statistics
```javascript
const articleSchema = new mongoose.Schema({
  views: { type: Number, default: 0, min: 0 },
  likes: { type: Number, default: 0, min: 0 },
  shares: { type: Number, default: 0, min: 0 },
  wordCount: { type: Number, min: 0 }
});
```

### 4. Ratings and Scores
```javascript
const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number, required: true, min: 1, max: 5,
    validate: {
      validator: v => v >= 1 && v <= 5,
      message: 'Rating must be between 1 and 5'
    }
  },
  score: { type: Number, min: 0, max: 100 }
});
```

### 5. Coordinates and Geographic Data
```javascript
const locationSchema = new mongoose.Schema({
  latitude: { type: Number, required: true, min: -90, max: 90 },
  longitude: { type: Number, required: true, min: -180, max: 180 },
  altitude: { type: Number, default: 0 }
});
```

### 6. Inventory and Quantity Management
```javascript
const inventorySchema = new mongoose.Schema({
  quantity: { type: Number, required: true, min: 0, default: 0 },
  minStock: { type: Number, default: 10, min: 0 },
  maxStock: { type: Number, default: 1000, min: 0 },
  reorderLevel: { type: Number, default: 20, min: 0 }
});
```

### 7. Time-based Numbers (Duration, Timestamps)
```javascript
const sessionSchema = new mongoose.Schema({
  duration: { type: Number, min: 0, default: 0 }, // in seconds
  timeoutMinutes: { type: Number, default: 30, min: 1 },
  timestampNumber: { type: Number, default: Date.now }
});
```

### 8. Percentage Values
```javascript
const performanceSchema = new mongoose.Schema({
  completionRate: { type: Number, min: 0, max: 100, default: 0 },
  accuracy: {
    type: Number,
    min: 0,
    max: 1,
    validate: {
      validator: v => v >= 0 && v <= 1,
      message: 'Accuracy must be between 0 and 1'
    }
  }
});
```

---

## Schema Options and Validators

### Common Options
```javascript
const numberFieldSchema = {
  type: Number,
  required: true,
  default: 0,
  min: 0,
  max: 100,
  unique: true,
  index: true,
  sparse: true,
  immutable: true
};
```

### Custom Validators
```javascript
const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
    validate: [
      { validator: v => v > 0, message: 'Price must be positive' },
      { validator: v => v <= 10000, message: 'Price cannot exceed $10,000' }
    ]
  }
});
```

### Getters and Setters
```javascript
const priceSchema = new mongoose.Schema({
  priceInCents: {
    type: Number,
    get: v => v / 100,
    set: v => v * 100
  }
});
```

---

## Advanced Number Use Cases

### 1. Array of Numbers
```javascript
const surveySchema = new mongoose.Schema({
  scores: [{ type: Number, min: 0, max: 10 }],
  ratings: {
    type: [Number],
    validate: {
      validator: arr => arr.every(rating => rating >= 1 && rating <= 5),
      message: 'All ratings must be between 1 and 5'
    }
  }
});
```

### 2. Calculated/Virtual Numbers
```javascript
const orderSchema = new mongoose.Schema({
  items: [{ price: Number, quantity: Number }],
  taxRate: { type: Number, default: 0.08 }
});

orderSchema.virtual('subtotal').get(function() {
  return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

orderSchema.virtual('total').get(function() {
  return this.subtotal * (1 + this.taxRate);
});
```

### 3. Number with Custom Transformation
```javascript
const temperatureSchema = new mongoose.Schema({
  celsius: {
    type: Number,
    set: v => Math.round(v * 100) / 100
  }
});

temperatureSchema.virtual('fahrenheit').get(function() {
  return (this.celsius * 9/5) + 32;
});
```

---

## Complete Module Schema Example
```javascript
const ecommerceProductSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
    min: 0,
    get: v => Math.round(v * 100) / 100,
    set: v => Math.round(v * 100) / 100
  },
  stock: { type: Number, required: true, min: 0, default: 0 },
  weight: { type: Number, min: 0 },
  dimensions: {
    length: { type: Number, min: 0 },
    width: { type: Number, min: 0 },
    height: { type: Number, min: 0 }
  },
  averageRating: { type: Number, min: 0, max: 5, default: 0 },
  totalReviews: { type: Number, min: 0, default: 0 },
  totalSales: { type: Number, min: 0, default: 0 },
  viewCount: { type: Number, min: 0, default: 0 },
  discountPercentage: { type: Number, min: 0, max: 100, default: 0 }
}, { timestamps: true });

ecommerceProductSchema.virtual('discountedPrice').get(function() {
  return this.price * (1 - this.discountPercentage / 100);
});

module.exports = mongoose.model('Product', ecommerceProductSchema);
```

---

## Best Practices
- ✅ Always validate ranges using `min` and `max`
- ✅ Set meaningful default values
- ✅ Consider precision (especially for financial data)
- ✅ Index frequently queried number fields
- ✅ Use **virtuals** for calculated values
- ✅ Add **custom validators** for business rules
- ✅ Handle edge cases (`NaN`, `Infinity`)
- ✅ Use **getters/setters** for data transformation

---

## Common Pitfalls
- ❌ Not validating number ranges
- ❌ Using floating-point for currency without rounding
- ❌ Missing default values for counters/statistics
- ❌ Allowing invalid negative numbers
- ❌ Forgetting to index frequently queried number fields
