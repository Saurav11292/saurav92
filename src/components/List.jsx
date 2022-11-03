import React from "react";
import "./list.scss";

export default function List({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "list active" : "list"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
