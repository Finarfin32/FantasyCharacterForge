import React, { useEffect } from "react";
import "../App.css";
import "./DescriptionCards.css";
import { RACE_DESCRIPTION, CLASS_DESCRIPTION } from "../consts/description";
//a function that checks which card has been selected
//by passing the 3 arguments from parent
function Description({
  currentTab,
  pickedRaceCard,
  pickedClassCard,
  activeCard,
  setActiveCard,
  setPickedRaceCard,
  setPickedClassCard,
  handleSubmit,
}) {
  useEffect(() => {
    if (currentTab === 0 && pickedRaceCard !== "Not selected")
      setActiveCard(pickedRaceCard);
    else if (currentTab === 1 && pickedClassCard !== "Not selected")
      setActiveCard(pickedClassCard);
    else setActiveCard(0);
  }, [currentTab, pickedRaceCard, pickedClassCard, setActiveCard]);

  const setPickedCard = () => {
    if (currentTab === 0) setPickedRaceCard(activeCard);
    else setPickedClassCard(activeCard);
    handleSubmit();
  };

  return (
    <>
      <div className="ButtonsDescription">
        <button
          className="arrow-left"
          onClick={() => {
            setActiveCard(activeCard - 1);
          }}
          disabled={activeCard === 0 ? true : false} //Array 4 elements - 0-3 if 0 disable onclick and block movment to the left.
        >
          Przewiń w lewo
        </button>
        <button onClick={setPickedCard} className="arrow-sub">
          Potwierdź
        </button>
        <button
          className="arrow-right"
          onClick={() => {
            setActiveCard(activeCard + 1);
          }}
          disabled={activeCard === 3 ? true : false} //if 3 disable onclick and block movment to the left.
        >
          Przewiń w prawo
        </button>
      </div>
      <div className="description">
        {/*If 0 show RACE_DESCRIPTION and activeCard */}
        {currentTab === 0 && <h3>{RACE_DESCRIPTION[activeCard]}</h3>}
        {currentTab === 1 && <h3>{CLASS_DESCRIPTION[activeCard]}</h3>}
      </div>
    </>
  );
}

export default Description;
