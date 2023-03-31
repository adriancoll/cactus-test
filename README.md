# Studio Cactus Technical Test

This project was created as part of the technical test for Studio Cactus. The goal of the project is to create a material selector for kitchen decoration using the NextJS framework, TailwindCSS for styling, and Firestore for data storage.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```bash
  git clone https://github.com/<your-username>/studio-cactus-tech-test.git
```

2. Copy and paste the `.env.template` and rename it to `.env` and set your firebase credentials.

3. Install the dependencies:

```bash
  cd studio-cactus-tech-test
  npm install
```

4. Start the development server:

```bash
  npm run dev
```

The project should now be running on http://localhost:3000.

## Linting 

To lint the code i have installed ESLint with StandardJS, soo simply go with:

```bash
  npm run lint
```

## Contributing

If you have any suggestions for how to improve this project, please [open an issue](https://github.com/adriancoll/cactus-test/issues) or [create a pull request](https://github.com/adriancoll/cactus-test/pulls) with your proposed changes.

## Functionality

The material selector allows users to browse and select materials for kitchen decoration. The materials are displayed in cards that show an image of the material asd the name of the material.

When a user selects a material, grabs the layer from the material from the firestore database and shows the new material on the page.

## Conclusion

This project demonstrates the use of NextJS, TailwindCSS, and Firestore to create a material selector for kitchen decoration. It can be extended to include additional features and functionality as required.

## To-Do List

- [✔️] Initial configurations
- [✔️] Initialize Github repository
- [✔️] Install NextJS
- [✔️] Config StandardJS
- [✔️] Config TailwindCSS
- [🚀] Project
- [✔️] Create Main Layout
  - [✔️] Base image
  - [✔️] Material Selector component
    - [✔️] Material Selector item component
- [✔️] 🔥 Firebase
  - [✔️] Env variables
  - [✔️] Install deps
  - [✔️] Connect to Cactus Firestore
- [✔️] 🔥 Create UI Context
- [✔️] 🔥 Store all the images when selected by position
  - [✔️] Handle click on each material card
  - [✔️] Store in context
  - [✔️] Get the selected material by point
- [✔️] 🔥 Move firestore to next backend
- [✔️] 📁 Change current project to Clean HEX Architecture
