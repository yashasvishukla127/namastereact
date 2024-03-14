// const heading = React.createElement(
//     'h1',
//     {
//         id: 'title',
//         className: 'heading'
//     },
//     'Hello World!'
// );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "title",
//     },
//     "Heading 2"
// );

// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//     },
//     [heading, heading2]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);



const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
  ]);
  
  //JSX
  
  console.log(parent); // object
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);