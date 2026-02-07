import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="event">
      <div className="left">
        <img
          className="event-photo"
          src="./photos/event-image-2.png"
          alt="Valentine special event banner"
        />
      </div>
      <div className="right">
        <h4 className="description">
          The Day of Love,
          <br /> To my favourite person, <br />
          In my story you'll always be my favourite chapter.
          <br />
          Let's meet again for the first time. <br /> <br />- Happy Valentines
          Day!
        </h4>
        <div className="valentine-button">
          <button
            className="download-button col-12"
          >
            Be My Valentine&nbsp;<i class="bi bi-chat-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
