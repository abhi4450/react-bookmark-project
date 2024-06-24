import React from "react";

const WeblinkList = (props) => {

    const handleDelete = () => {
        props.onDelete(props.id);
    }
    return (
        <li>
            {`${props.title} >>`} <a href={props.url} target="_blank"> {props.url}  </a>
            <button onClick={handleDelete}>Delete</button>

      </li>
  )

}

export default WeblinkList;