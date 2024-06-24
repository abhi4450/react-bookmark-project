import React, { useState } from "react";
import Webform from "./components/Webform";
import WeblinkList from "./components/WeblinkList";

function App() {
  const [dummydata, setDummydata] = useState([]);
  const [editData, setEditData] = useState(null);

  const addHandler = (data) => {
    setDummydata((prevState) => {
      const arr = [{ ...data, id: Math.random().toString() }, ...prevState];
      return arr;
    });
  };

  const deleteHandler = (id) => {
    const updatedData = dummydata.filter((item) => item.id !== id);
    setDummydata(updatedData);
  };

  const editHandler = (id, newData) => {
    const updatedData = dummydata.map((item) =>
      item.id === id ? { ...item, title: newData.title, url: newData.url } : item
    );
    setDummydata(updatedData);
    setEditData(null); 
  };


  const setEditBookmark = (bookmark) => {
    setEditData(bookmark);
  };

  return (
    <>
      <h1>BookMark Website</h1>
      <Webform onAdd={addHandler} editData={editData}
        onEdit={editHandler} />
      <h2>All BookMarks</h2>
      <ul>
        {dummydata.map((data) => (
          <WeblinkList
            key={data.id}
            id={data.id}
            title={data.title}
            url={data.url}
            onDelete={deleteHandler}
            onEdit={setEditBookmark}
          />
        ))}
      </ul>
    </>
  );
}
export default App;
