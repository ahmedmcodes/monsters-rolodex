import React from "react";
import "./card-list.styles.css";
import RenderCards from "../rendered-card.component";

const CardList = ({ stateData }) => {
  const { monsters, originalMonsters } = stateData;
  return <RenderCards stateData={{ monsters, originalMonsters }} />;
};

export default CardList;
