import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="event">
      <div className="left">
        <img
          className="event-photo"
          src="./photos/event-image.png"
          alt="Valentine special event banner"
        />
      </div>
      <div className="right">
        <h4 className="description">
          The Day of Love,
          <br /> To my favourite person, I wish I wanna go back the time when
          you first told your name, In my story you'll always be my favourite
          chapter.
          <br />
          Let's meet again for the first time. <br /> <br />- Happy Valentines
          Day!
        </h4>
      </div>
    </div>
  );
}

export default Events;
