# React + TypeScript + Vite
Introducing a full-stack web application developed with cutting-edge technologies, this project leverages Vite, React, Tailwind CSS, and TypeScript for the frontend, while the backend is powered by Express using a simple file-based approach for data storage.

Key Technologies Used:

    Frontend:
        Vite
        React
        Tailwind CSS
        TypeScript

    Backend:
        Express with a file-based storage approach

Development Accelerators:

    Shadcn-ui
    multer
    zustand
    lucide-react

To enhance the development experience, nodemon and concurrently are employed to facilitate rapid reloads of the API during code changes, enabling seamless development for both the backend and frontend

In this project, I've opted for a straightforward project structure by placing both the Express backend and the Vite + React frontend in the same directory. This decision promotes a unified and easy-to-follow project organization, making it convenient to navigate and manage both the server-side and client-side code within a single workspace.

# Usage
## Cloning
**Prerequisites:** Ensure that PORT 3000 is available, and use Node version v20.9.0.
1. Clone the repository.
2. Install dependencies.
3. Run npm run dev or pnpm run dev

## Docker
#### WSL/Libux
Step 1: Build the Docker image

``sudo docker build -t <preferred_image_name> .``

Step 2: Create a container from the image

``sudo docker run -p 5173:5173 -p 3000:3000 --name <preferred_container_name>  <name_of_image_in_step_1>``




# To do
- Testing


# Screenshot
![Home](screenshot/home.png)
![Shop](screenshot/shop.png)
![Cart](screenshot/cart.png)
![Product](screenshot/product.png)
![AddModify](screenshot/addmodify.png)
![Modal](screenshot/addproduct.png)
![404](screenshot/404.png)

