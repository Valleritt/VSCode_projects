const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
            React.createElement(Pet, { name: "Fluffy", animal: "Dog", breed: "Labrador Retriever"} ),
            React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel"} ),
            React.createElement(Pet, { name: "Jackie", animal: "Cat", breed: "Persian"} ),
        ]
      );
    };

    ReactDOM.render(React.createElement(App), document.getElementById("root"));