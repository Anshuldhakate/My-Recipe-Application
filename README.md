# My-Recipe-Application

An interactive recipe application built with **React.js (Frontend)** and **Node.js (Express.js, MongoDB) Backend**. It integrates with the **Spoonacular API** to fetch recipes and allows users to save favorites.

## Deployed links-
 Backend- https://recipe-backend-fy1o.onrender.com <br/>
 Frontend- https://rainbow-platypus-17e206.netlify.app

## 🚀 Features
- **Search Recipes**: Search for recipes using keywords.
- **Recipe Details**: View detailed information including ingredients and instructions.
- **Favorites**: Save favorite recipes for later.
- **User Authentication**: Register and login to manage saved recipes.

## 🛠️ Technologies Used
### Frontend
- React.js
- React Router
- Axios

### Backend
- Node.js (Express.js MVC)
- MongoDB
- Spoonacular API Integration
- JWT Authentication

## 📂 Folder Structure
```
📦 recipe-app
 ┣ 📂 backend
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📜 server.js
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 App.js
 ┃ ┃ ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## 🏗️ Installation & Setup
### Backend Setup
```sh
cd backend
npm install
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
npm start
```

## 🌍 API Endpoints
### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login user

### Recipes
- **GET** `/api/recipes/search?query=<keyword>` - Search for recipes
- **GET** `/api/recipes/:id` - Get details of a recipe
- **POST** `/api/recipes/favorites` - Save a recipe to favorites
- **GET** `/api/recipes/favorites` - Get all favorite recipes



## 📸 Screenshots

<img width="959" alt="Screenshot 2025-03-07 163626" src="https://github.com/user-attachments/assets/b195db93-55a6-43ec-825c-8e2b46bc1a0d" />
<img width="955" alt="Screenshot 2025-03-02 155046" src="https://github.com/user-attachments/assets/eac3e014-cd42-43bc-8b64-20316156d2cb" />
<img width="955" alt="Screenshot 2025-03-07 163720" src="https://github.com/user-attachments/assets/76a27e07-46f7-41ba-8de8-33de27b98c4a" />




## 🤝 Contributing
Contributions are welcome! Feel free to submit a PR.

## 📝 License
This project is licensed under the MIT License.
