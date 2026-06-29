# ⚡ Futuristic Portfolio (React v2)

A personal futuristic-style portfolio website focused on clean UI, smooth interactions, and a dashboard-like experience. Originally built using pure HTML, CSS, and JS, this project has been fully migrated and upgraded to a **React** architecture powered by **Vite**.

This project represents my journey into modern web development with an emphasis on minimalism, component-driven design, performance, and real-world interaction patterns.

---

## 🚀 Features

- **Modern Single Page Application (SPA)**
  - Dynamic content loading without page refresh using React state.
  - Component-driven architecture for robust scalability.

- **Interactive Dashboard System**
  - Clicking sections like *More Skills* seamlessly swaps components in the view.
  - Clean state management (`useState`, `useEffect`) handles navigation and theme toggling.

- **Futuristic UI Design & Dark Mode**
  - Glassmorphism inspired layout with a premium teal (`#4FC6CE`) accent color system.
  - Dynamic Dark and Light theme toggler.

- **Live GitHub Heatmap Integration**
  - Uses `react-github-calendar` to showcase a live, dynamically colored GitHub contribution streak.
  - Custom Year selector to filter past contributions instantly.

- **Fully Responsive**
  - Optimized to work smoothly across desktop, tablet, and mobile displays.

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| React     | UI Library for building interactive components |
| Vite      | Lightning fast modern build tool |
| CSS3      | Advanced styling, flexbox layouts, animations, and CSS variables |
| JavaScript (ES6+) | Application logic and state management |

---

## 📁 Project Structure

```text
/
├── public/                 # Static assets like images and global index.html
│   └── Images v2/          
├── src/                    
│   ├── components/         # Reusable React components
│   │   ├── Heatmap.jsx     # GitHub calendar component
│   │   ├── MainContent.jsx # Core dynamic content area
│   │   ├── Navbar.jsx      # Navigation & Theme toggle
│   │   └── Profile.jsx     # Static profile sidebar
│   ├── App.jsx             # Main container
│   ├── index.css           # Global CSS variables and styles
│   └── main.jsx            # React root mount
└── package.json            # Project dependencies and scripts
```

---

## 💡 Quick Start

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhishek-047/Portfolio-v2-Own-.git
   ```
2. Navigate into the directory and install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Author

**Abhishek Panigrahi**  
Aspiring Software Engineer / Scientist  
Interested in AI, Space Tech, and futuristic systems.
