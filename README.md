<div align="center">

# 🔢 Counter App

### A simple React counter project built with `useState`, decoupled components, and bounded values.

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-4CAF50?style=for-the-badge&logo=github&logoColor=white)](https://asmashahzadi764-alt.github.io/react-counter-usestate/)

</div>

---

## 📖 About

This project demonstrates independent, self-contained counters built using React's `useState` hook. Each `Counter` component maintains its own isolated state — incrementing or decrementing one counter has no effect on the others.

The value of every counter is bounded between **0** and **5**, so it never goes negative or exceeds the limit.

---

## ✨ Features

- 🎯 Multiple independent counter instances (fully decoupled state)
- 🔒 Value range restricted between `0` and `5`
- ⚡ Built with React + Vite for fast dev experience
- 🎨 Clean, minimal UI styling

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | UI library / component logic |
| Vite | Build tool & dev server |
| useState Hook | State management per component |
| CSS | Styling |

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation

```bash
# Clone or extract the project
cd counter

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Project Structure

```
counter/
├── src/
│   ├── App.jsx      # Counter component + logic
│   ├── App.css       # Styling
│   └── main.jsx       # Entry point
├── index.html
└── package.json
```

---

## 🧠 How It Works

Each `<Counter />` call creates a brand-new, isolated instance of state via `useState(0)`. Increment and decrement functions use a ternary condition to keep the value within the `0–5` range:

```javascript
const increment = () => {
  setValue((previousValue) => 
    previousValue < max ? previousValue + 1 : previousValue
  );
};
```

Because each component holds its own closure over `value` and `setValue`, the counters never interfere with one another.

---

<div align="center">

Author: Asma Shahzadi

</div>