
# **Donation Platform** 🌍🤝  

## 📌 Purpose  
This platform connects generous donors with impactful donation campaigns across various divisions in Bangladesh. Users can explore donation campaigns, contribute items, and support those in need.  

## 🌐 Live URL  
Visit the platform live here: [Donation Platform Live](https://heat-of-giving.web.app/)  

## ✨ Key Features  
- **Browse Campaigns** – View a list of ongoing donation campaigns categorized by division.  
- **Campaign Details** – See each campaign’s purpose, status, and contact information.  
- **Donate Items** – Users can contribute specific items via a donation form, specifying pickup location and notes.  
- **Responsive Design** – Optimized for mobile, tablet, and desktop viewing.  
- **Loading State Management** – Displays loading indicators when fetching data.  

---

## 🔄 How It Works  
1. **Explore** donation campaigns based on division.  
2. **Check Details** to learn more about the campaign.  
3. **Donate Now** by filling out a form with donation details.  
4. **Pickup or Drop-off** – Our team will arrange item collection.  

---

## 🛠️ Technologies Used  

### **Frontend**  
- [React.js](https://reactjs.org/) – Component-based UI development.  
- [React Router](https://reactrouter.com/) – Routing and navigation.  

### **Styling**  
- [Tailwind CSS](https://tailwindcss.com/) – Modern utility-first styling.  
- [Animate.css](https://animate.style/) – Smooth CSS animations.  

### **Data Fetching & Storage**  
- Fetch API – Fetching campaign details.  
- Firebase – Authentication and database (if applicable).  
- LocalForage – Local storage management.  

---

## 📦 NPM Dependencies  

```json
{
  "name": "heat-of-giving",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "animate.css": "^4.1.1",
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-router-dom": "^6.28.0",
    "react-toastify": "^10.0.6",
    "sort-by": "^1.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.13.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^5.4.10"
  }
}
```

---

## ⚡ Installation & Setup  

### **Prerequisites**  
1. **Node.js** – Install [Node.js](https://nodejs.org/).  
2. **Firebase Project** – Create a Firebase project and configure authentication (if required).  

### **Installation Steps**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/heat-of-giving.git
   ```
2. Navigate to the project folder:  
   ```bash
   cd heat-of-giving
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Set up Firebase (if applicable):  
   - Create a `.env` file in the root directory.  
   - Add Firebase configuration:  
     ```env
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```
5. Start the development server:  
   ```bash
   npm run dev
   ```

---

## 🖼️ Screenshot  
![Donation Platform Homepage](https://raw.githubusercontent.com/adnanmahmud0/Heat-of-Giving/refs/heads/main/Screenshot%202025-02-08%20034006.png)  

---

## 🚀 Development & Build Commands  

| Command           | Description                            |
|------------------|--------------------------------|
| `npm run dev`    | Starts the development server. |
| `npm run build`  | Builds the project for production. |
| `npm run preview` | Previews the built project. |
| `npm run lint`   | Runs ESLint for code checking. |

---
