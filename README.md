# Patients Tracking Vet App

A simple veterinary patient management application built with **React**, **TypeScript**, **Zustand** for state management, **React Hook Form** for form handling, **React Toastify** for notifications, and **Tailwind CSS** for styling. The project uses **Vite** for fast development and build tooling.

## Features

- Add, edit, and delete veterinary patients
- Form validation with helpful error messages
- Persistent state using localStorage (via Zustand middleware)
- Responsive and modern UI with Tailwind CSS
- Toast notifications for user feedback

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Hook Form](https://react-hook-form.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Project Structure

```
src/
  App.tsx                # Main app component
  store.ts               # Zustand store for patient state
  components/            # Reusable React components
  types/                 # TypeScript types
  index.css              # Tailwind CSS import
  main.tsx               # App entry point
```

## Live Demo

Access the deployed application here:  
[https://tourmaline-chebakia-b6c3b0.netlify.app/](https://tourmaline-chebakia-b6c3b0.netlify.app/)

---

This project was bootstrapped with [Vite](https://vitejs.dev/) and follows best practices for modern React development.