import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const URL = "/api/pets";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  adoptPet = (petId) => {
    const allPets = this.state.pets.map((pet) => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets: allPets });
  };

  onChangeType = (value) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
    console.log(value);
  };

  urlReturn = (type) => {
    return `${URL}?type=${type}`;
  };

  fetchReq = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((pets) => {
        this.setState({ pets: pets });
        console.log(this.state.pets);
      });
  };

  onClickFind = () => {
    const { type } = this.state.filters;
    type === "all"
      ? this.fetchReq("/api/pets")
      : this.fetchReq(`${URL}?type=${type}`);
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onClickFind}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
