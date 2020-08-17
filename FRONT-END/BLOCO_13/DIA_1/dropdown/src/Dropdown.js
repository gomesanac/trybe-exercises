import React from "react";
import "./Dropdown.css";
import PropTypes from "prop-types";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItemId: this.props.list[0].id,
      isOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hadleItemClick = this.hadleItemClick.bind(this);
  }

  toggleDropdown() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }

  hadleItemClick(id) {
    this.setState({ clickedItemId: id });
  }

  render() {
    const { children, list } = this.props;
    const { isOpen, clickedItemId } = this.state;
    const clickedItem = list.find(({ id }) => id === clickedItemId);

    return (
      <div className="list-container">
        <span>{children}</span>
        <div className="dropdown-click" onClick={this.toggleDropdown}>
          {clickedItem.item}
        </div>
        <div className={isOpen ? "open-dropdown" : "close-dropdown"}>
          {list.map(({ id, item }) => (
            <div key={id} onClick={() => this.hadleItemClick(id)}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  children: "Minha lista",
};

Dropdown.propTypes = {
  children: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      item: PropTypes.string,
    })
  ),
};

export default Dropdown;
