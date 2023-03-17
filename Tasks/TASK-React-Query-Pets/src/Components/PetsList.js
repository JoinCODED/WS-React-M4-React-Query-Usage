import React, { useState } from "react";
import PetItem from "./PetItem";

function PetsList({ petsData }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [pets, setPets] = useState(petsData);

  const handleAdopt = (petId) =>
    setPets(pets.filter((pet) => pet.id !== petId));

  const petList = pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query.toLowerCase()) &&
        pet.type.includes(type)
    )
    .map((pet) => <PetItem key={pet.id} pet={pet} handleAdopt={handleAdopt} />);
  return (
    <section id="doctors" class="doctor-section pt-140">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-6 col-lg-7">
            <div class="section-title text-center mb-30">
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <br />
              Type:
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}
export default PetsList;
