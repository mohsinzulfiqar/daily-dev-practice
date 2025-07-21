# 🔶 Assistive Technologies (ATs) – Notes & Overview

Assistive Technologies (ATs) are tools that help people with **disabilities** interact with digital content, hardware, or software.

They are a **key component** of building **accessible** web applications and work hand-in-hand with technologies like **Semantic HTML**, the **Accessibility Tree**, and **ARIA roles**.

---

## 📌 What Are Assistive Technologies?

> Assistive Technologies (ATs) refer to hardware or software designed to aid users with disabilities in accessing digital content.

---

## 🧰 Common Types of ATs

| Type                        | Description |
|-----------------------------|-------------|
| **Screen Readers**          | Read aloud on-screen content (text, alt text, roles) for visually impaired users. |
| **Speech Recognition**      | Converts speech to commands for navigating and interacting with UI. |
| **Screen Magnifiers**       | Zoom or enlarge screen content for low-vision users. |
| **Alternative Input Devices** | Physical or software devices used in place of standard keyboards/mice (e.g., eye tracking, sip-and-puff). |

---

## 🗂️ Examples of Popular ATs

| Tool                    | Type               | Platform |
|-------------------------|--------------------|----------|
| **NVDA**                | Screen Reader      | Windows |
| **JAWS**                | Screen Reader      | Windows |
| **VoiceOver**           | Screen Reader      | macOS / iOS |
| **TalkBack**            | Screen Reader      | Android |
| **ZoomText**            | Magnifier/Reader   | Windows |
| **Dragon NaturallySpeaking** | Speech Recognition | Windows/Mac |
| **Sip-and-Puff systems**| Input device       | Hardware |

---

## 🌳 The Accessibility Tree

The **Accessibility Tree** is a simplified, transformed version of the DOM that ATs interact with.

### How It's Built:
- Uses **semantic HTML**
- Honors **`alt`**, **`aria-*`**, **`role`**, **`label`** attributes
- Filters out purely decorative elements (e.g., `alt=""` images)

### Example:

```html
<img src="user-profile.jpg" alt="Profile picture of Mohsin">
🔊 Screen Reader Output:
    "Profile picture of Mohsin, image"
💡 src is not exposed; only alt goes into the accessibility tree.

<!-- ✅ Accessible -->
<button type="button">Click Me</button>

<!-- ❌ Not accessible -->
<div onclick="doSomething()">Click Me</div>

### Problem with Non-Semantic Tags:
<div> has no default keyboard support
Not announced properly by screen readers
Needs manual fixes: role="button", tabindex="0", aria-label=..., Enter/Space handling


🧪 Testing Tools for AT Behavior
Tool	Purpose
axe DevTools	Automated accessibility scanner (Chrome/Firefox)
Lighthouse	Accessibility audits in Chrome DevTools
Screen Readers	Manual real-world testing
VoiceOver Rotor	Navigate landmarks, links, headings
Accessibility Tree Viewers	Inspect how DOM is converted