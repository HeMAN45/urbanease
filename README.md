🏡 Urbanease: Modern Urban Service Platform

🌟 Overview

Urbanease is a full-stack, modern web application designed to connect users with essential urban service providers (plumbers, electricians, pest control, etc.). Built as a monorepo for clean separation, it delivers a fast, responsive frontend experience powered by React and a scalable, robust backend using Node.js and Drizzle ORM.

🚀 Features

🧑‍💻 Service Provider Profiles: Detailed profiles for various service professionals.

✨ Seamless Booking: Intuitive user interface for scheduling services.

⚙️ Scalable Architecture: Clear separation of client and server code in a monorepo structure.

🔒 Type Safety: Built entirely with TypeScript for reliable code.

🛠️ Tech Stack

Frontend (Client)

Framework: React (The core JavaScript library for building the user interface.)

Tooling: Vite (Next-generation frontend tooling for fast development and bundling.)

Styling: Tailwind CSS & Shadcn UI (Utility-first CSS framework and beautiful component library for design.)

Language: TypeScript (Ensures type safety across the entire application.)

Backend (Server)

Framework: Express.js (Fast, unopinionated, minimalist web framework for Node.js.)

Language: TypeScript (Provides server-side type checking and stability.)

Database ORM: Drizzle ORM (Modern, head-less TypeScript ORM for interacting with the database.)

Tooling: Esbuild (Used for bundling the serverless function for deployment.)

💻 Getting Started

Prerequisites

Before running this project, ensure you have the following installed:

Node.js (v18.x or higher)

npm or Yarn (npm is used in the instructions below)

A PostgreSQL/SQLite database (depending on your Drizzle config) and its connection URL (DATABASE_URL).

Installation & Local Setup

Clone the repository:

git clone [https://github.com/HeMAN45/urbanease.git](https://github.com/HeMAN45/urbanease.git)
cd urbanease



Install dependencies in the root:

npm install



Environment Variables:
Create a file named .env in the root directory and add your necessary environment variables, particularly your database connection string and any API keys:

# Example: Replace with your actual database URL
DATABASE_URL="postgresql://user:password@host:port/database"
# Add any other required variables (e.g., for the client)
# VITE_PUBLIC_API_URL="http://localhost:3000/api" 



Run the Build Script:
This script builds both the client (Vite) and the server (Esbuild).

npm run build



Start the Server:
(Assuming your package.json has a start script for the compiled server)

npm run start:server



Start the Client (in a separate terminal):
Navigate into the client directory and start the development server.

cd client
npm run dev
# The client app should now be running on http://localhost:5173 (or similar)



☁️ Deployment

This project is optimized for deployment on Vercel, utilizing its ability to handle both static assets and serverless functions (API routes).

The included vercel.json file configures the deployment to:

Serve static client assets from the root-level /dist folder.

Route all API calls (/api/...) to the compiled Express serverless function.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details (if one is provided in your repo).

📞 Contact

You can find the project owner, Himanshu Bawane, on GitHub: @HeMAN45

Happy coding! 🚀
