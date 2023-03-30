# Studio Cactus Technical Test

This project was created as part of the technical test for Studio Cactus. The goal of the project is to create a material selector for kitchen decoration using the NextJS framework, TailwindCSS for styling, and Firestore for data storage.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   bash
   Copy code
   git clone https://github.com/<your-username>/studio-cactus-tech-test.git
   Install the dependencies:
   bash
   Copy code
   cd studio-cactus-tech-test
   npm install
   Create a Firebase project and add the Firestore database to it.

Start the development server:

```bash
npm run dev
```

The project should now be running on http://localhost:3000.

Project Structure
The project is structured as follows:

lua
Copy code
studio-cactus-tech-test/
├── components/
│ ├── Layout/
│ └── MaterialSelector/
├── pages/
│ ├── index.js
│ └── \_app.js
├── public/
├── styles/
├── utils/
│ └── firestore.js
├── .env.local.example
├── .gitignore
├── firebase.json
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.js
The components folder contains the reusable components used in the project.
The pages folder contains the NextJS pages used in the project.
The public folder contains the static assets used in the project.
The styles folder contains the TailwindCSS styles used in the project.
The utils folder contains the utility functions used in the project, including the firestore.js file that handles Firestore operations.
The .env.local.example file contains the example environment variables used in the project.
The firebase.json file contains the Firebase hosting configuration.
The next.config.js file contains the NextJS configuration used in the project.
The package.json file contains the project dependencies and scripts.
The README.md file contains the project documentation.
The tailwind.config.js file contains the TailwindCSS configuration used in the project.
Functionality

## Todo List

- [✔️] Initial configurations
- [✔️] Initialize Github repository
- [✔️] Install NextJS
- [✔️] Config StandardJS
- [✔️] Config TailwindCSS
- [🚀] Project
- [✔️] Create Main Layout
  - [✔️] Base image
  - [✔️] Side Menu component
    - [...] Side Menu item component
- [✔️] 🔥 Firebase
  - [✔️] Env variables
  - [✔️] Install deps
  - [✔️] Connect to Cactus Firestore
- [✔️] 🔥 Create UI Context
- [✔️] 🔥 Store all the images when selected by position
  - [✔️] Handle click on each material card
  - [✔️] Store in context
  - [] Get the selected material by point

```

```
