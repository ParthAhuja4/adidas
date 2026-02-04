# 3D Adidas Store

This project is a web application that showcases Adidas store in an interactive 3D environment. It's built with Next.js, React, and Three.js to provide a rich and engaging user experience.

## What the project does

This application allows users to view different Adidas shirts in a dynamic 3D space. The main page features a "studio" with multiple shirt models that the user can cycle through. From there, the user can select a shirt to view it in a dedicated scene with more details and animations.

The project is structured to be easily extensible, allowing for the addition of new shirts, scenes, and animations with minimal effort.

## Why the project is useful

- **Interactive 3D Visualization:** Instead of static images, users can interact with 3D models of the shirts, rotating and zooming to see every detail. This provides a more immersive and informative shopping experience.
- **Multiple Scenes:** The application features different "studios" or scenes (e.g., "Gray," "Sport," "White") to display the shirts in various settings, each with its own unique ambiance and lighting.
- **Dynamic Content:** The application uses dynamic routing to generate pages for each shirt, making it easy to add new products without changing the core application logic.
- **Modern Tech Stack:** Built with the latest web technologies, including:
  - **Next.js:** For server-side rendering, routing, and a robust application structure.
  - **React:** For building a modular and maintainable component-based user interface.
  - **Three.js:** For creating and rendering the 3D scenes and models.
  - **@react-three/fiber & @react-three/drei:** To seamlessly integrate Three.js with React.
  - **GSAP:** For creating high-performance animations.
  - **Tailwind CSS:** For styling the user interface.

## Project Structure

The project is organized into the following main directories:

- `app/`: Contains the main application pages and routing logic.
  - `app/page.tsx`: The home page of the application.
  - `app/shirts/[slug]/page.tsx`: The dynamic page for individual shirts.
- `components/`: Contains all the React components used in the application, including the 3D scenes and models.
- `lib/`: Contains helper functions, custom hooks, and other utility code.
- `public/`: Contains all the static assets, such as 3D models (`.glb`), textures, images, and videos.
- `styles/`: Contains global styles and Tailwind CSS configuration.

## How to get started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or later)
- [npm](https://www.npmjs.com/)

### Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/adidas.git
    cd adidas
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other Commands

- **Build for production:**

  ```bash
  npm run build
  ```

- **Start the production server:**

  ```bash
  npm run start
  ```

- **Lint the code:**

  ```bash
  npm run lint
  ```

## Contribution Workflow

We welcome and encourage community contributions. Please adhere to the following workflow:

1.  **Fork the Repository**: Start by forking the main repository to your own GitHub account.
2.  **Create a Feature Branch**: Create a new branch for your work. Use a descriptive name.
    ```sh
    git checkout -b feature/MyAmazingFeature
    ```
3.  **Commit Your Changes**: Make your changes and commit them with clear, descriptive commit messages.
    ```sh
    git commit -m 'feat: Implement MyAmazingFeature'
    ```
4.  **Push to Your Branch**: Push your changes up to your forked repository.
    ```sh
    git push origin feature/MyAmazingFeature
    ```
5.  **Submit a Pull Request**: Open a pull request from your feature branch to the `main` branch of the original repository. Provide a detailed description of your changes.

---

## Contact

**Developer:** Parth Ahuja  
**GitHub:** [@ParthAhuja4](https://github.com/ParthAhuja4)  
**Email:** [parthahuja006@gmail.com](mailto:parthahuja006@gmail.com)
**Linked In:** [Parth Ahuja](https://www.linkedin.com/in/parthahuja4/)
