import React from "react";

const WeblinkList = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const handleEdit = () => {
    const editData = {
      id: props.id,
      title: props.title,
      url: props.url,
    };
    props.onEdit(editData);
  };

  return (
    <li>
      {`${props.title} >>`}
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.url}
      </a>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default WeblinkList;
