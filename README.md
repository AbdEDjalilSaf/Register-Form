# React + Vite

Tailwind CSS is one of the most beautiful ✨ CSS framework that makes it very much easy 🍃 to design our websites and React is a library that many Front-End developers love to work with to make user interfaces.

But what if we combine the these 2 best technologies together?🤔 In this blog I will show you how to configure Tailwind CSS with React JS:

First We need to install ReactJS, I am using Vite to install ReactJS,⚛️

So first Open the folder 📂 (The folder in which you want to create your project) in VSCode terminal or any other terminal you like and run this command :

npm create vite@latest
Vite
Next Generation Frontend Tooling
vitejs.dev

The above command is from Vite’s website , after running the command it will ask us for project name and package name:


Project name
Give name to the project and package then hit Enter

After that it will ask us to select a framework and ofcourse we’re going to select React (I know It’s a library 😅)


And then it will ask us to Select a variant I am choosing JavaScript Here and then hit Enter:


Then cd into the project folder that is created and run the below command:

npm install
It will install all the required dependencies and now we can run the project by running “npm run dev” but before doing that now’s the time to install Tailwind CSS, head over to the Tailwind website with the link given below:

Install Tailwind CSS with Vite - Tailwind CSS
Setting up Tailwind CSS in a Vite project.
tailwindcss.com

Now run these 2 commands in your terminal 👨🏾‍💻one by one:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
The above 2 commands will add tailwind.config.js and postcss.config.js files 🗃️, so your whole folder & file structure will look like this:

tailwind.config.js and postcss.config.js files are added
After this open your tailwind.config.js file which is currently looking like this:

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
In the above code we have to change only the “content” key as shown in the Tailwind website:


or you can copy and paste the “content” section from below:
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
after this add the tailwind directives on top of your src/index.css file, which are:

@tailwind base;
@tailwind components;
@tailwind utilities;
Now run the Development sever by running “npm run dev” and you will see your project running on localhost:5173 like this:

Running Project with tailwind installation
head over to your App.jsx file and start writing ✍🏾 tailwind css classes


You can see the changes being reflected on your project:

Changes getting reflected in project
Congratulations!! 🥳🎉🥳🎊 You have successfully installed Tailwind in React and now you can customize your site how ever you like!

That was all about configuring Tailwind CSS with ReactJS I hope you liked this blog post, if you liked it please give it a clap and a follow I post content around JavaScript, React or web development in general

Thanks for reading this 😄😄
