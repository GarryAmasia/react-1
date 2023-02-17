const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
    className: "classHeading1",
    style: { color: cyan },
  },
  "Heading1 made from React.createElement",
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title2",
    className: "classHeading2",
    style: { color: tomato },
  },
  "Heading2 made from React.createElement",
);

const container = React.createElement("div", { id: container }, [
  heading1,
  heading2,
]);

const root = React.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(container);
