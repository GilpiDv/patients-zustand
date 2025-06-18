# Patients Tracking Vet App

A veterinary patient management application built with React, TypeScript, Zustand, React Hook Form, React Toastify, and Tailwind CSS.

## Features

- Add, edit, and delete veterinary patients
- Form validation with error messages
- Persistent state using localStorage (Zustand middleware)
- Responsive UI with Tailwind CSS
- Toast notifications for user feedback

## Project Structure

```
src/
  App.tsx                # Main app component
  store.ts               # Zustand store for patient state
  components/            # Reusable React components
    Error.tsx
    PatientDetailItem.tsx
    PatientDetails.tsx
    PatientForm.tsx
    PatientList.tsx
  types/                 # TypeScript types
    index.ts
  index.css              # Tailwind CSS import
  main.tsx               # App entry point
  vite-env.d.ts
public/
index.html
package.json
vite.config.ts
tsconfig.json
tsconfig.app.json
tsconfig.node.json
eslint.config.js
.gitignore
README.md
```

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/patients-zustand.git
   cd patients-zustand
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Hook Form](https://react-hook-form.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## How to use

1. Run `npm run dev` and open `http://localhost:5173` in your browser.
2. Add, edit, or delete patients using the form and patient list.
3. All changes are saved automatically and persist after reloading.

## Live Demo

[https://tourmaline-chebakia-b6c3b0.netlify.app/](https://tourmaline-chebakia-b6c3b0.netlify.app/)