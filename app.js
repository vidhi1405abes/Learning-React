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
const grandParent = React.createElement("div", { id: "grandParent" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", { id: "child1" }, "Child1"),
    React.createElement("h2", { id: "child2" }, "Child2"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", { id: "child3" }, "Child3"),
    React.createElement("h2", { id: "child4" }, "Child4"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(grandParent);
// console.log(heading);
