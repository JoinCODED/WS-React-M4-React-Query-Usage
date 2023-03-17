import React from "react";

const MessageItem = ({ msg }) => {
  return (
    // IMPORTANT NOTE FOR LINE 8
    // TO SHOW THE MSG ON THE LEFT USE THIS CLASSNAME "chat__item other"
    // TO SHOW THE MSG ON THE RIGHT USE THIS CLASSNAME "chat__item"
    <div style={{ animationDelay: `0.8s` }} className={`chat__item`}>
      <div className="chat__item__content">
        <div className="chat__msg">{msg}</div>
        <div className="chat__meta">
          <span>By: user</span>
        </div>
      </div>
      <div className="avatar">
        <div className="avatar-img">
          <img src="http://placehold.it/80x80" alt="#" />
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
