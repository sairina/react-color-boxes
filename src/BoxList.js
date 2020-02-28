import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import uuid from 'uuid/v4';

function BoxList() {
  //state
  const [boxes, setBoxes] = useState([]);

  //render boxes array
  //will need to iterate over boxes

  //could also just make boxComponents (just the map of the array)
  //and put it in the return at the bottom without calling function
  //what is preferred?
  const renderBoxes = () => {
    return (
      <div className="BoxList-renderBoxes">
        {boxes.map(box => (
          <Box key={box.id}
            id = {box.id}
            backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height}
            removeBox={removeBox}
          />
        ))}
      </div>
    );
  };

  //addBox to array of boxes
  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  };

  //removeBox from array of boxes
  const removeBox = id => {
    setBoxes(boxes.filter(box=> box.id !== id));
  } 
  
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;