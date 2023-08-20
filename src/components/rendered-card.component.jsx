import React from "react";

const RenderCards = ({ stateData }) => {
  const { monsters } = stateData;

  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <div className="monster-container" key={monster.id}>
          <img
            alt="monster"
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
          />
          <h1>{monster.name}</h1>
          <p>{monster.email}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderCards;
