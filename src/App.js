import "./App.css";
import "./shared.scss";
import React, { useState } from "react";
import RaceCardsState from "./components/RaceCardsState";
import ClassCardsState from "./components/ClassCardsState";
import Summary from "./components/Summary";
import AttributesPage from "./components/AttributesPage/AttributesPage.js";
import Description from "./components/DescriptionCards";
import Buttons from "./components/Buttons";

function App() {
  const [pickedRaceCard, setPickedRaceCard] = useState("Not selected");
  const [pickedClassCard, setPickedClassCard] = useState("Not selected");
  const [currentTab, setCurrentTab] = useState(0);
  const [isDisabled, setDisabled] = useState([false, true, true, true]);
  const [activeCard, setActiveCard] = useState(0);
  const [formData, setFormData] = useState();

  //Function locks the buttons if (currentTab && pickedRaceCard) - true
  //Function change array setDisabled
  const handleSubmit = () => {
    if (currentTab === 0 && pickedRaceCard === "Not selected") {
      setDisabled([false, false, true, true]);
    } else if (currentTab === 1 && pickedClassCard === "Not selected") {
      setDisabled([false, false, false, true]);
    } else if (currentTab === 2 && pickedClassCard === "Not selected") {
      setDisabled([false, false, false, true]);
    } else {
      setDisabled([false, false, false, false]);
    }
    setCurrentTab(currentTab + 1);
  };

  const handleAttributesFormSubmit = (data) => {
    setFormData(data);
    handleSubmit();
  };

  return (
    <div className="app">
      <Buttons setCurrentTab={setCurrentTab} isDisabled={isDisabled}></Buttons>{" "}
      {/* Component / shows Buttons / set their state */}
      {/*if current tab 0 show RaceCardState with 3 properties */}
      {currentTab === 0 && <RaceCardsState activeCard={activeCard} />}
      {/*if current tab 1 show ClassCardState with 3 properties */}
      {currentTab === 1 && <ClassCardsState activeCard={activeCard} />}
      {/*if current tab 2 show AttributFesPage with div Test and Description */}
      {currentTab === 2 && (
        <AttributesPage
          pickedRaceCard={pickedRaceCard}
          pickedClassCard={pickedClassCard}
          handleSubmitAttributes={handleAttributesFormSubmit}
        />
      )}
      {currentTab === 3 && <Summary formData={formData} />}
      <div className="Buttons2">
        {currentTab < 2 && (
          <Description
            pickedRaceCard={pickedRaceCard}
            pickedClassCard={pickedClassCard}
            currentTab={currentTab}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            setPickedRaceCard={setPickedRaceCard}
            setPickedClassCard={setPickedClassCard}
            handleSubmit={handleSubmit}
          ></Description>
        )}
      </div>
    </div>
  );
}

export default App;
