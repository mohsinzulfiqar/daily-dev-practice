# 📚 Accessible Headings: Rules, Examples & Best Practices

## 🧭 Purpose
Headings play a crucial role in accessible design. They help screen readers, assistive technologies, and users navigate the page and understand its structure. This guide focuses on how to use headings semantically and accessibly, in line with a11y (accessibility) best practices.

---

## ✅ Core Rules for Accessible Headings

### 1️⃣ Use Only One `<h1>` Per Page
- The `<h1>` element represents the main heading of the page.
- It is usually the title of the document or page.
- There should be **only one `<h1>`** per page.

```html
<!-- ✅ Good -->
<h1>Product Documentation</h1>

<!-- ❌ Bad -->
<h1>Product Documentation</h1>
<h1>Installation Instructions</h1>
```

🔍 **Why it matters:** Screen readers often use the `<h1>` to announce the main content. Having multiple `<h1>` elements creates confusion.

---

### 2️⃣ Apply Headings for Structure, Not Style
- Headings should indicate **document structure**, not just be used to make text large or bold.
- Use CSS to style text, not semantic tags like `<h2>` or `<h3>` unless the content is truly a heading.

```html
<!-- ❌ Bad: using heading for style -->
<h3>Click Here</h3>

<!-- ✅ Good -->
<p class="button-label">Click Here</p>
```

🔍 **Why it matters:** Improper heading usage leads to incorrect document outlines and makes it harder for screen reader users to navigate.

---

### 3️⃣ Use Headings in Consecutive Order
- Heading levels should follow a logical sequence: `<h1>` → `<h2>` → `<h3>` → etc.
- Do **not** skip levels, like jumping from `<h1>` to `<h4>`.

```html
<!-- ✅ Good -->
<h1>Website Title</h1>
  <h2>About Us</h2>
    <h3>Our Team</h3>

<!-- ❌ Bad -->
<h1>Website Title</h1>
  <h4>Our Team</h4> <!-- skipped h2 and h3 -->
```

🔍 **Why it matters:** Skipping heading levels breaks the logical hierarchy, which can confuse assistive tech users.

---

### 4️⃣ Avoid Empty Headings
- Every heading element should have meaningful content.

```html
<!-- ❌ Bad -->
<h2></h2>

<!-- ✅ Good -->
<h2>Pricing</h2>
```

🔍 **Why it matters:** Screen readers announce heading tags whether or not they contain text. An empty tag is confusing and useless.

---

### 5️⃣ Nest Headings Semantically
- Heading levels should represent the structure of your content like a tree.
- Subsections should use sub-level headings.

```html
<h1>Guide to Gardening</h1>
  <h2>Planning</h2>
    <h3>Choosing a Location</h3>
  <h2>Planting</h2>
    <h3>Seed Types</h3>
```

🔍 **Why it matters:** A clear structure helps users skim and understand your content quickly.

---

## 🧪 Accessibility Testing Tips

| Action                        | Tool or Technique                      |
|-----------------------------|----------------------------------------|
| Validate heading order      | WebAIM WAVE or Axe DevTools            |
| Navigate headings by screen reader | NVDA, JAWS, or VoiceOver         |
| Evaluate outline structure  | Chrome DevTools → Accessibility panel  |

---

## 💡 Common Mistakes & Fixes

| ❌ Mistake                        | ✅ Fix                                           |
|----------------------------------|--------------------------------------------------|
| Using multiple `<h1>`s           | Use a single `<h1>` per page                    |
| Skipping heading levels          | Maintain order: `<h1>` → `<h2>` → `<h3>`        |
| Styling text with headings       | Use CSS for styling, not semantic tags          |
| Empty heading elements           | Ensure all headings contain text                |

---

## 🎨 Styling Tip
Style headings as needed using CSS:

```css
h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}
```

✅ This maintains structure while allowing flexibility in presentation.

---

## 📚 References
- [WCAG 2.1: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
- [HTML5 Outline Algorithm](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [Deque University: Headings](https://dequeuniversity.com/rules/axe/4.7/heading-order)

---

## ✅ Final Accessibility Checklist
- [x] One `<h1>` per page
- [x] Use headings to structure content
- [x] Follow correct heading levels
- [x] Avoid empty headings
- [x] Test with assistive tools

> "A meaningful heading structure isn’t just good for screen readers — it’s good for everyone."
