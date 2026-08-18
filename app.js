import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React",
// );
{
  /* <div id="grandParent">
    <div id="parent">
        <h1 id="child">Hello world from child</h1>
    </div>
</div> */
}
// const parent=React.createElement("div",{id:"grandParent"},React.createElement("div",{id:"parent"},React.createElement("h1",{id:"child"},"Hello world from child")))
{
  /* <div id="grandParent">
    <div id="parent1">
        <h1 id="child1">Child1</h1>
        <h2 id="child2">Child2</h2>
    </div>
    <div id="parent2">
        <h1 id="child3">Child3</h1>
        <h2 id="child4">Child4</h2>
    </div>
</div> */
}
// const grandParent = React.createElement("div", { id: "grandParent" }, [
//   React.createElement("div", { id: "parent1" }, [
//     React.createElement("h1", { id: "child1" }, "Child1"),
//     React.createElement("h2", { id: "child2" }, "Child2"),
//   ]),
//   React.createElement("div", { id: "parent2" }, [
//     React.createElement("h1", { id: "child3" }, "Child3"),
//     React.createElement("h2", { id: "child4" }, "Child4"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(grandParent);
// console.log(heading);
// const heading=React.createElement("h1",{id:"heading"},"Hiiii");
// console.log(heading);
const HeadingComponent=()=>{
  return <h1>This is a React Component</h1>
}
const num=1000;
const TitleComponent=()=>{
  return (<div>
    <h1>{num}</h1>
    <HeadingComponent/>
    <h1>I am the title Component</h1>
  </div>);
}
const jsxHeading = <h1 className="head">Hii from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent />);
