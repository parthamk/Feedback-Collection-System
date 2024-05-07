
# Feedback Collection System

### How to run this application in localhost:

You need to have latest version of nodejs and mongodb community server installed.

1. Clone the repository with this command:

   `git clone https://github.com/parthamk/Feedback-Collection-System.git`
2. Once cloned get into the directory:

    `cd Feedback-Collection-System`

3. To run server use these commands

   `cd server`

   `npm i`

   `npm start`
4. To run the fronend use these commands

   `cd frontend`

   `npm i`

   `npm run dev`


### Technology used to create the application are

* Frontend
  * Vitejs
  * tailwindcss
  * libraries:
    * react-router-dom
    * react-hot-toast
    * axios
* Backend
  * Nodejs
  * mongodb
  * libraries:
    * express.js
    * mongoose
    * nodemon
    * cors
    * bcryptjs
    * dotenv
    * jsonwebtoken


### File structure



```
└── 📁Feedback-Collection-System
    └── 📁backend
        └── .env
        └── .gitignore
        └── 📁controllers
            └── sampleController.js
        └── 📁models
            └── Sample.js
        └── package-lock.json
        └── package.json
        └── 📁routes
            └── sampleRoutes.js
        └── server.js
    └── 📁frontend
        └── .eslintrc.cjs
        └── .gitignore
        └── index.html
        └── package-lock.json
        └── package.json
        └── postcss.config.js
        └── 📁public
            └── vite.svg
        └── README.md
        └── 📁src
            └── App.css
            └── App.jsx
            └── 📁assets
                └── react.svg
            └── 📁components
                └── Form.jsx
                └── RequireAuth.jsx
            └── index.css
            └── main.jsx
            └── 📁pages
                └── 📁dashboard
                    └── Dashboard.jsx
                    └── Home.jsx
                    └── Profile.jsx
                └── Login.jsx
                └── Register.jsx
        └── tailwind.config.js
        └── vite.config.js
    └── package-lock.json
    └── README.md
    └── 📁server
        └── .env
        └── .gitignore
        └── 📁controllers
            └── authController.js
            └── fromController.js
        └── index.js
        └── 📁models
            └── authModel.js
            └── formModel.js
        └── package-lock.json
        └── package.json
        └── 📁routes
            └── authRoutes.js
            └── formRoute.js
```
