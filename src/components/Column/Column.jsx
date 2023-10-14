import React from "react";
import "./Column.css";
import { UilPlus, UilEllipsisH } from "@iconscout/react-unicons";
import Card from "../Card/Card";

function Column({ userData, cards, heading, grouping, ordering, extra }) {
  var orderCards;
  if (cards) {
    if (ordering === "priority") {
      orderCards = [...cards].sort((a, b) => b.priority - a.priority);
    } else {
      orderCards = [...cards].sort((a, b) => (a.title > b.title ? 1 : -1));
    }
  }

  if (grouping !== "userId") {
    return (
      <div className="Column">
        <div className="header">
          <div>
            <img
              src={heading.icon}
              alt="heading-icon"
              className="heading-icon"
            />
            {heading.name}
            {orderCards ? <span>{orderCards.length}</span> : <span>0</span>}
          </div>
          <div>
            <UilPlus />
            <UilEllipsisH />
          </div>
        </div>
        <div className="cards">
          {orderCards
            ? orderCards.map((ele) => (
                <Card
                  key={ele.id}
                  userData={userData}
                  card={ele}
                  grouping={grouping}
                  extra={extra}
                />
              ))
            : null}
        </div>
      </div>
    );
  } else {
    var initial = userData.name.split(" ");

    if (initial.length !== 1) {
      initial = initial[0][0] + initial[initial.length - 1][0];
    } else {
      initial = initial[0][0] + " ";
    }

    initial = initial.toUpperCase();

    var availColor;

    if (userData.available) {
      availColor = "#e1bd09";
    } else {
      availColor = "grey";
    }

    return (
      <div className="Column">
        <div className="header">
          <div>
            <div
              className="user-icon"
              style={{ backgroundColor: userData.color }}
            >
              {initial}
              <div style={{ backgroundColor: availColor }}></div>
            </div>
            {userData.name}
            {orderCards ? <span>{orderCards.length}</span> : <span>0</span>}
          </div>
          <div>
            <UilPlus />
            <UilEllipsisH />
          </div>
        </div>
        <div className="cards">
          {orderCards
            ? orderCards.map((ele) => (
                <Card
                  key={ele.id}
                  card={ele}
                  grouping={grouping}
                  extra={extra}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Column;
