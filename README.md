# My-Recipe-Application

An interactive recipe application built with **React.js (Frontend)** and **Node.js (Express.js, MongoDB) Backend**. It integrates with the **Spoonacular API** to fetch recipes and allows users to save favorites.

## Deployed links-
 Backend- https://recipe-backend-fy1o.onrender.com
 Frontend- 

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


## 🤝 Contributing
Contributions are welcome! Feel free to submit a PR.

## 📝 License
This project is licensed under the MIT License.
