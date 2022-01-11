import React from 'react';
import './Item.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item(props) {

  return (
    <li className="Item">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
      <p className={`Item-p ${props.completed && 'Item-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
}

export {Item};