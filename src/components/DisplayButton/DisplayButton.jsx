import React from "react";
import { UilSlidersV, UilAngleDown } from "@iconscout/react-unicons";
import "./DisplayButton.css";

function DisplayButton({ grouping, setGrouping, ordering, setOrdering }) {
  function handleClick() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  return (
    <div className="Display-Button">
      <div>
        <button className="btn" onClick={handleClick}>
          <UilSlidersV />
          Display
          <UilAngleDown />
        </button>
      </div>
      <div id="dropdown" className="dropdown-list">
        <div className="dropdown-items">
          <label htmlFor="group-select">Grouping</label>

          <select
            name="groups"
            id="group-select"
            value={grouping}
            onChange={(e) => setGrouping(e.target.value)}
          >
            <option value={"status"}>Status</option>
            <option value={"userId"}>User</option>
            <option value={"priority"}>Priority</option>
          </select>
        </div>
        <div className="dropdown-items">
          <label htmlFor="order-select">Ordering</label>

          <select
            name="orders"
            id="order-select"
            value={ordering}
            onChange={(e) => setOrdering(e.target.value)}
          >
            <option value={"priority"}>Priority</option>
            <option value={"title"}>Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DisplayButton;
