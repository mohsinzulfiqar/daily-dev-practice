# ♿ Accessible List Markup: Avoid Repetitive `<div>`s

## ✅ Purpose

This guide helps you understand how to **write semantic and accessible lists** using `<ul>` (unordered list) and `<ol>` (ordered list) with `<li>` elements, instead of non-semantic repeated `<div>` tags.

By following this guide, you will:

- ✅ Improve HTML semantics
- ✅ Ensure screen reader compatibility
- ✅ Increase maintainability
- ✅ Support keyboard navigation & a11y best practices

---

## ❌ Anti-Pattern: Using `<div>`s for List Items

```html
<!-- Non-semantic, inaccessible -->
<div>Product 1</div>
<div>Product 2</div>
<div>Product 3</div>
```

### 💨 Why This Is Bad for a11y

| Problem                  | Description |
|--------------------------|-------------|
| ❌ No semantic meaning   | Screen readers can't identify this as a list. |
| ❌ No keyboard structure | Keyboard-only users get no indication of grouping. |
| ❌ Not screen-reader friendly | Navigation becomes unpredictable. |
| ❌ Poor maintainability | More HTML, more chance of bugs or layout issues. |

---

## ✅ Recommended: Semantic `<ul>` or `<ol>` with `<li>`

### ✔️ Basic Unordered List (Good for items without order)

```html
<ul aria-label="List of available products">
  <li>Product 1</li>
  <li>Product 2</li>
  <li>Product 3</li>
</ul>
```

### ✔️ Basic Ordered List (For steps or priority)

```html
<ol aria-label="Steps to complete registration">
  <li>Create an account</li>
  <li>Verify your email</li>
  <li>Log in to dashboard</li>
</ol>
```

> 📝 **Why use `aria-label`?**  
> Helps screen readers understand the purpose of the list when context isn't clear visually.

---

## 🔒 Accessibility Checklist for Lists

| ✅ Checkpoint                                  | Description |
|------------------------------------------------|-------------|
| Use `<ul>`/`<ol>` for groups of related items  | Logical structure helps screen readers |
| Always use `<li>` inside lists                 | Don’t put `<div>` or `<p>` directly inside |
| Use `aria-label` or `aria-labelledby` if needed | When the purpose of the list isn’t visually obvious |
| Use `<ol>` only when the sequence/order matters | For steps, rankings, etc. |
| Avoid unnecessary `role="list"`                | Native lists already expose correct roles |
| Ensure list items are readable & keyboard accessible | Don't hide content with CSS or JS |

---

## 🎯 Real-World Examples

### 🔹 Features List (Unordered)

```html
<ul aria-label="Key features of our product">
  <li>Mobile responsive</li>
  <li>Fast performance</li>
  <li>Secure authentication</li>
</ul>
```

### 🔹 Step-by-step Instructions (Ordered)

```html
<ol aria-label="Installation steps">
  <li>Download the setup</li>
  <li>Install the dependencies</li>
  <li>Run the application</li>
</ol>
```

---

## 🎨 Styling Tip (Don't Remove Meaning!)

If you remove list styles (`list-style-type: none`), **do not forget to retain structure** visually or with assistive tech.

```css
ul.features {
  list-style: none;
  padding: 0;
}

ul.features li::before {
  content: "•";
  color: #00b894;
  margin-right: 8px;
}
```

---

## ❓ When to Avoid Lists

Only use lists when:

- You are listing **two or more items** that share a common group or purpose.
- The items are **visually or semantically grouped**.

✅ Do **NOT** use a list for one-off unrelated items or content blocks.

---

## 🧠 Summary

| ✅ Do This                             | ❌ Avoid This |
|----------------------------------------|----------------|
| Use `<ul>`/`<ol>` + `<li>` for lists   | Repeated `<div>` for similar items |
| Provide `aria-label` if needed         | Leaving screen readers guessing |
| Choose semantic tags over generic ones | Using only `<div>`/`<span>` everywhere |
| Keep lists clean and structured        | Mixing unrelated items into one list |

---

## 📚 Additional Resources

- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Docs - List Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [WebAIM: Semantic Structure](https://webaim.org/techniques/semanticstructure/)

---

## 📦 Example for React (a11y-friendly)

```jsx
function FeatureList() {
  return (
    <ul aria-label="Main features" className="feature-list">
      <li>Real-time notifications</li>
      <li>Dark mode support</li>
      <li>Multi-language support</li>
    </ul>
  );
}
```

---

## 🏁 Final Thoughts

> Semantic HTML **is the first step** toward accessibility.  
> If you're writing lists of items, use `<ul>` or `<ol>` — not repeated `<div>`s.  
> Help all users, including those with disabilities, **understand and navigate** your content easily.

---
