import React from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import Form from "./components/Form";
import ShowInformations from "./components/ShowInformations";

function App() {
  return (
    <Provider store={store}>
      <Form />
      <ShowInformations />
    </Provider>
  );
}

export default App;
