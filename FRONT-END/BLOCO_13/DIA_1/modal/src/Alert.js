import React from "react";
import PropTypes from "prop-types";
import "./Alert.css";

const Alert = (props) => {
  const { hideComponent } = props;
  const { title, content, timeSeconds } = props.children;
  setTimeout(() => hideComponent(), timeSeconds * 1000);
  return (
    <div className="Alert">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  children: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    timeSeconds: PropTypes.number,
  }),
};

Alert.defaultProps = {
  children: {
    title: "Modal",
    content: "Coloque qualquer coisa aqui.",
    timeSeconds: 3,
  }
}

export default Alert;
