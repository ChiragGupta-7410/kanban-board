import React from "react";
import "./Card.css";
import featureLogo from "../../images/feature.png";

function Card({ userData, card, grouping, extra }) {
  //   console.log(userData);
  //   console.log(card);
  //   console.log(grouping);
  //   console.log(extra);
  var tags = [];
  var count = 0;
  for (var i = 0; i < card.tag.length; i++) {
    var temp = card.tag[i].split(" ");
    for (var j = 0; j < temp.length; j++) {
      temp[j] = temp[j].charAt(0).toUpperCase() + temp[j].slice(1);
    }
    tags.push(temp.join(" "));
  }

  if (grouping !== "userId") {
    const userDetail = userData.find((user) => user.id === card.userId);
    var initial = userDetail.name.split(" ");

    if (initial.length !== 1) {
      initial = initial[0][0] + initial[initial.length - 1][0];
    } else {
      initial = initial[0][0] + " ";
    }

    initial = initial.toUpperCase();
    var statusDetail;
    if (grouping === "priority") {
      statusDetail = extra.find((e) => e.value === card.status);
    } else {
      statusDetail = extra.find((e) => e.value === card.priority);
    }

    var availColor;

    if (userDetail.available) {
      availColor = "#e1bd09";
    } else {
      availColor = "grey";
    }

    return (
      <div className="Card">
        <div className="container">
          <div className="first">
            {card.id}
            <div style={{ backgroundColor: userDetail.color }}>
              {initial}
              <div style={{ backgroundColor: availColor }}></div>
            </div>
          </div>
          <div className="second">
            <img src={statusDetail.icon} alt="" />
            {card.title}
          </div>
          {tags
            ? tags.map((tag) => (
                <div className="third" key={count++} style={{ width: "50%" }}>
                  <img src={featureLogo} alt="" />
                  {tag}
                </div>
              ))
            : null}
        </div>
      </div>
    );
  } else {
    var status = extra[0].find((e) => e.value === card.status);
    var priority = extra[1].find((e) => e.value === card.priority);

    return (
      <div className="Card">
        <div className="container">
          <div className="first">{card.id}</div>
          <div className="second">
            <img src={status.icon} alt="" />
            {card.title}
          </div>
          <div className="parent">
            <img
              src={priority.icon}
              alt=""
              style={{
                width: "12px",
                paddingRight: "5px",
                height: "12px",
                marginTop: "5px",
              }}
            />
            <div>
              {tags
                ? tags.map((tag) => (
                    <div className="third" key={count++}>
                      <img src={featureLogo} alt="" />
                      {tag}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
