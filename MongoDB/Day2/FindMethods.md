# 📌 MongoDB `.find()` Cheat Sheet with Real-World Examples (Mongoose)

This document provides a comprehensive list of MongoDB `.find()` methods using **Mongoose**, along with **real-world scenarios** explaining **where, why, and when** to use each.

---

## 🔹 1. Find All Users
```js
await User.find();
```
**Where/Why:** Admin dashboards or small datasets.  
**Best:** When you want **all documents** (avoid on very large collections).

---

## 🔹 2. Find with Filter
```js
await User.find({ role: "admin" });
```
**Where/Why:** Role-based dashboards or filtering employees.  
**Best:** When you need a subset by **specific criteria**.

---

## 🔹 3. Find One
```js
await User.findOne({ username: "mohsin" });
```
**Where/Why:** Login checks or profile fetch.  
**Best:** When only **one match** is expected.

---

## 🔹 4. Find by ID
```js
await User.findById("66b83f12345abcd1234ef567");
```
**Where/Why:** User profile pages or APIs (`/users/:id`).  
**Best:** Fastest lookup (IDs are indexed).

---

## 🔹 5. Projection (Select Fields)
```js
await User.find({}, { name: 1, email: 1, _id: 0 });
```
**Where/Why:** Mailing lists or public APIs.  
**Best:** Reduces payload size in APIs.

---

## 🔹 6. Sorting
```js
await User.find().sort({ age: -1 });
```
**Where/Why:** Leaderboards, HR dashboards.  
**Best:** When **order matters**.

---

## 🔹 7. Pagination
```js
await User.find().skip(5).limit(5);
```
**Where/Why:** Search results, infinite scroll, tables.  
**Best:** Prevents overloading the UI with huge result sets.

---

## 🔹 8. Comparison Operators
```js
await User.find({ age: { $gt: 20, $lt: 40 } });
```
**Where/Why:** Marketing campaigns or analytics.  
**Best:** Numeric ranges (age, salary, prices).

---

## 🔹 9. Logical Operators
```js
await User.find({ $or: [{ role: "admin" }, { age: { $gt: 30 } }] });
```
**Where/Why:** Complex filters in dashboards.  
**Best:** Multiple qualifying conditions.

---

## 🔹 10. Regex Search
```js
await User.find({ name: new RegExp("^Mo", "i") });
```
**Where/Why:** Autocomplete search bars.  
**Best:** Partial matches.  
⚠️ Slower on huge collections unless indexed.

---

## 🔹 11. `$in` / `$nin`
```js
await User.find({ role: { $in: ["admin", "manager"] } });
```
**Where/Why:** Multi-select filters in HR systems.  
**Best:** When field matches **one of many values**.

---

## 🔹 12. `$exists`
```js
await User.find({ phone: { $exists: true } });
```
**Where/Why:** Check profile completeness.  
**Best:** For optional fields.

---

## 🔹 13. `$elemMatch`
```js
await User.find({ skills: { $elemMatch: { name: "React", level: "advanced" } } });
```
**Where/Why:** Recruitment apps & freelance platforms.  
**Best:** Nested array of objects filtering.

---

## 🔹 14. `$all`
```js
await User.find({ hobbies: { $all: ["reading", "coding"] } });
```
**Where/Why:** Communities or clubs.  
**Best:** User must have **all listed values**.

---

## 🔹 15. Text Search
```js
await User.find(
  { $text: { $search: "Ali" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } });
```
**Where/Why:** Global search across profiles.  
**Best:** Relevance-ranked searches with weighted fields.

---

## 🔹 16. Count Documents
```js
await User.countDocuments({ role: "admin" });
```
**Where/Why:** Admin dashboards or stats.  
**Best:** Show totals without retrieving data.

---

## 🔹 17. Lean Queries
```js
await User.find().lean();
```
**Where/Why:** High-performance read-only APIs.  
**Best:** Faster queries (30–40% speed gain).

---

## 🔹 18. Populate
```js
await User.find().populate("organizationId");
```
**Where/Why:** Multi-tenant apps (resolve foreign keys).  
**Best:** Fetch related data in one query.

---

## 🔹 19. Aggregation
```js
await User.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: "$role", total: { $sum: 1 } } }
]);
```
**Where/Why:** Analytics dashboards and reports.  
**Best:** Complex queries (grouping, counts, averages).

---

# ✅ Quick Reference
- **findAll** → Admin dashboards  
- **findOne/findById** → Profiles & login  
- **projection** → Lightweight APIs  
- **pagination** → Tables, search results  
- **regex** → Autocomplete  
- **$elemMatch** → Skills/filters  
- **text search** → Global search  
- **lean** → Fast read APIs  
- **populate** → Joins/relationships  
- **aggregation** → Reports & analytics  

---

✍️ Author: Mohsin 
📅 Updated: 2025
