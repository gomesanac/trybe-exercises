import React from "react";

class FetchDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      imageSrc: "",
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    if (localStorage.lastImgURL) {
      return this.setState({
        isLoaded: true,
        imageSrc: localStorage.getItem("lastImgURL"),
      });
    }
    this.fetch();
  }

  fetch() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((response) => {
        this.setState({
          isLoaded: true,
          imageSrc: response.message,
        });
      });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { imageSrc } = nextState;

    if (imageSrc.includes("terrier")) return false;
    return true;
  }

  componentDidUpdate(_prevProps, prevState) {
    const { imageSrc } = prevState;
    const dogBredd = imageSrc.split("/")[4];

    if (dogBredd !== undefined) alert(`It's ${dogBredd}`);

    localStorage.setItem("lastImgURL", imageSrc);
  }

  render() {
    const { isLoaded, imageSrc } = this.state;
    if (!isLoaded) return <span>Loading...</span>;
    return (
      <div>
        <h2>Doguinhos</h2>
        <button onClick={this.fetch}>New dog</button>
        <div>
          <img src={imageSrc} alt="Imagem de um cachorro" className="dog-img" />
        </div>
      </div>
    );
  }
}

export default FetchDog;
