import React, { useState, useEffect } from "react";

const Webform = (props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (props.editData) {
      setTitle(props.editData.title);
      setUrl(props.editData.url);
    } else {
      setTitle("");
      setUrl("");
    }
  }, [props.editData]);

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const urlHandler = (event) => {
    setUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const submittedData = {
      title: title,
      url: url,
    };
    if(props.editData) {
      props.onEdit(props.editData.id, submittedData);
    } else {
      props.onAdd(submittedData);
    }
    setTitle("");
    setUrl("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Website Title</label>
        <input type="text" value={title} id="title" onChange={titleHandler} />
      </div>
      <div>
        <label htmlFor="url">Website URL</label>
        <input type="url" value={url} id="url" onChange={urlHandler} />
      </div>
      <button type="submit">{props.editData ? "Save" : "Add"}</button>
    </form>
  );
};

export default Webform;
