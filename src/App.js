import React,{useState} from "react";
import Webform from "./components/Webform";
import WeblinkList from "./components/WeblinkList";

function App() {

  const [dummydata, setDummydata] = useState([])

  const addHandler = (data) => {
    setDummydata((prevState) => {
           
      const arr = [{...data, id:Math.random().toString()}, ...prevState]
      return arr;
         })
  }

  const deleteHandler = (id) => {
    const updatedData = dummydata.filter((item) => item.id !== id)
    setDummydata(updatedData)
  }

  return (
    <>
      <h1>BookMark Website</h1>
      <Webform onAdd={addHandler} />
      <h2>All BookMarks</h2>
      <ul>
        {dummydata.map((data) => (<WeblinkList key={data.id} id={data.id} title={data.title} url={data.url} onDelete={deleteHandler} /> ))}
      </ul>
      </>
  )
}
export default App;
