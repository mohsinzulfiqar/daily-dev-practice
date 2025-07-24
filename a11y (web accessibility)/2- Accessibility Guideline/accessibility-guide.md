
# 🌐 Accessibility Guidelines (WCAG) – A Quick Reference Guide

Web Content Accessibility Guidelines (WCAG) are a set of rules created to ensure web content is accessible to all users, including people with disabilities. These guidelines are organized into **three levels of conformance**:

---

## ✅ WCAG Conformance Levels

### 🔸 Level A – Minimum Accessibility

- Basic requirements to make content accessible.
- **Not fully accessible** – many users may still struggle to navigate and use the website.
- Example of what is required:
  - Provide text alternatives for non-text content.
  - Ensure keyboard navigation is possible.

**Example:**
```html
<img src="dog.jpg" alt="A happy dog playing with a ball">
```
Without the `alt` attribute, the image would not be accessible to screen reader users.

---

### 🔸 Level AA – Acceptable Accessibility (Industry Standard)

- **Most common standard** for accessibility.
- Covers a wide range of barriers.
- Aimed at making websites accessible to the majority of users.
- Requires **sufficient contrast**, resizable text, and clear navigation.

#### ✅ Contrast Requirements:
- **Normal text (below 24px):** 4.5:1 ratio
- **Large text (24px and bold, or 18.66px and bold):** 3:1 ratio

🔗 [Check color contrast here](https://webaim.org/resources/contrastchecker/)

**Example:**
```css
/* Bad example: Contrast too low */
.button {
  color: #888;
  background-color: #aaa;
}

/* Good example: Meets 4.5:1 contrast */
.button {
  color: #ffffff;
  background-color: #0055aa;
}
```

---

### 🔸 Level AAA – Highest Accessibility (Exceptional Quality)

- **The strictest level**, very high standards.
- Often difficult to meet for all content types.
- Used when targeting accessibility for users with the most significant disabilities.

#### ✅ Contrast Requirements:
- **Normal text:** 7:1 ratio
- **Large text:** 4.5:1 ratio

**Example:**
```css
/* Meets AAA standard for normal text contrast */
.body-text {
  color: #000000;
  background-color: #ffffff; /* Contrast: 21:1 */
}
```

---

## 📌 Additional Accessibility Best Practices

- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Provide keyboard focus indicators
- Use ARIA attributes where necessary
- Test with screen readers (NVDA, VoiceOver, JAWS)
- Ensure error messages are visible and clear

---

## 🧪 Tools to Help

- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- ✅ [WAVE Accessibility Tool](https://wave.webaim.org/)
- ✅ [axe DevTools – Chrome Extension](https://www.deque.com/axe/devtools/)

---

## 🎯 Summary Table

| Level | Contrast (Normal) | Contrast (Large Text) | Accessibility Quality       |
|-------|--------------------|------------------------|-----------------------------|
| A     | N/A                | N/A                    | Basic                       |
| AA    | 4.5:1              | 3:1                    | Accessible (Industry Standard) |
| AAA   | 7:1                | 4.5:1                  | Exceptional Accessibility   |

---

## 💡 Tip
Start by aiming for **WCAG Level AA**, which balances good accessibility with practical implementation. Level AAA is ideal for very specific cases such as government, health, or disability-focused websites.
