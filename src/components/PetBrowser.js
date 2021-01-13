import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  indPet = () => {};

  render() {
    const card = this.props.pets.map((pet) => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));
    return <div className="ui cards">{card}</div>;
  }
}

export default PetBrowser;
