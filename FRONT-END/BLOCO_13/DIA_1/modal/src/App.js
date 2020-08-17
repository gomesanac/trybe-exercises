import React, { Component } from "react";
import Button from "./Button";
import Alert from "./Alert";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      isDisableButton: false,
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  changeShowComponent = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
      isDisableButton: !state.isDisableButton,
    }));
  };

  render() {
    return (
      <div className="main">
        <Button
          content="Clique aqui"
          isDisable={this.state.isDisableButton}
          showComponent={this.changeShowComponent}
          value="Título Show"
        />
        {this.state.showModal && (
          <Alert
            hideComponent={this.changeShowComponent}
          >
            {{
              title: "Algum título",
              content: "Algum conteúdo",
              timeSeconds: 3,
            }}
          </Alert>
        )}
      </div>
    );
  }
}

export default App;
