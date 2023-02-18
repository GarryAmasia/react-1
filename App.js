// * Parcel is a beast
// * HMR -> Hot module replacement ==> will create .parcel-cache -> the time will be lower once u execute it after first time(cache)
// * Parcel does compression as well -> file become smaller
// * Parcel is make app compatible with older version of browser
// * Parcel will enable us to work with https(localhost:1234 -> is http) on development process. To do this, type npx parcel index.html --https
// * Parcel will manage port number as well, if we work on 2 project, parcel will give 2 different port number
// * WE SHOULD PUT PARCEL ON GITIGNORE
// * anything that can be auto-generate should be placed on .gitignore
// * Parcel using consistent hashing algorithms
// * Parcel is zero config( we dont need to do setting up(configuration ))
// * TRANSITIVE DEPENDENCIES ==> means that 1 dependency will depend on other dependencies and other dependencies will need other other dependencies.
// * browserlist.dev !important
// * Parcel will create a server which is : localhost:1234
// * Parcel does tree shacking --> removing un-wanted code --> lets say in the process of building an app, you are calling library to speed up the process, and that library is enable you to use its power as a helper(example: ti gives you 20 functions that you can use),BUT!!!! you only want to use 4 functions, then Parcel will remove other 16 function in order to optimize your app
// * Parcel doesnt remove console.log(in npm run build), therfore we need to install plugin called " npm install babel-plugin-transform-remove-console"
// * Babel is came along when we install Parcel as dependency

import React from "react";
import ReactDOM from "react-dom/client ";

const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
    key: 1,
    className: "classHeading1",
    style: { color: "cyan" },
  },
  "Heading1 made from React.createElement from parcel",
);
console.log(heading1);
// React.createElement()-> this will return an object and will be converted into html code and will be put on DOM

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    key: 2,
    className: "classHeading2",
    style: { color: "tomato" },
  },
  "Heading2 made from React.createElement",
);

//JSX!!!!!! is html like syntax not html inside javascript!!!!!!!->readibility,developer experience,syntatical sugar,less code,maintainablily, no repetition
//Basically jsx is using babel to convert "const heading3 = <h1>This is JSX!!</h1>;" to React.createElement()!!!!!!!!!!!!
//<h1>This is JSX!!</h1> --> this is html like syntax,,not HTML!!!!! -->
const heading3 = <h1>This is JSX!!</h1>;

//Lets create functional component
//functional component is just a function that returns jsx code/react element!
// Capital letter is not mandatory but its good practice to have capoital letter
const HeaderComponent = () => {
  return <h1>Namaste React component</h1>;
};

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
// root.render(container);
root.render(<HeaderComponent />);
