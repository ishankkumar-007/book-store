# `Book Store` Project Documentation

## Table of Contents

1. [Introduction](#1-introduction)
   - Overview
   - Features
2. [System Architecture](#2-system-architecture)
   - Frontend
   - Backend
   - Database
3. [Setup Instructions](#3-setup-instructions)
   - Prerequisites
   - Installation Steps
4. [Usage](#4-usage)
   - Running the Application
   - Accessing the API
5. [Frontend](#5-frontend)
   - Technologies Used
   - Project Structure
   - Implementation Details
6. [Backend](#6-backend)
   - Technologies Used
   - Project Structure
   - API Endpoints

---

## 1. Introduction

### Overview
The Book Store project is a web application designed to manage and showcase a collection of books. It provides functionalities for browsing books, adding new ones, updating details, and deleting entries. The project uses the MERN stack for full-stack development and leverages Vite for frontend bundling and Tailwind CSS for responsive and utility-first styling.

### Features
- CRUD operations for books (Create, Read, Update, Delete)
- Search and filter books based on categories or authors
- Responsive UI with Tailwind CSS

---

## 2. System Architecture

### Frontend
- **Framework**: React.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API

### Backend
- **Framework**: Express.js
- **Authentication**: JWT (JSON Web Tokens)

### Database
- **Database**: MongoDB
- **ODM (Object-Document Mapping)**: Mongoose

---

## 3. Setup Instructions

### Prerequisites
- Node.js
- MongoDB Atlas account (or local MongoDB server)
- npm or yarn

### Installation Steps
1. Clone the repository from GitHub.
2. Install dependencies for frontend and backend.
3. Configure environment variables.
4. Set up MongoDB connection.

---

## 4. Usage

### Running the Application
- Start frontend development server: `npm run dev` (using Vite)
- Start backend server: `npm start` or `npm run dev`

### Accessing the API
- API base URL: `http://localhost:5000/api`

---

## 5. Frontend

### Technologies Used
- React.js
- Vite (for fast build)
- Tailwind CSS (for styling)

### Implementation Details
- **Components**: Reusable UI components (e.g., BookCard, Navbar)
- **Pages**: Components for different views (e.g., Home, BookDetails)
- **Styling**: Uses Tailwind CSS for styling components and layout.

---

## 6. Backend

### Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
