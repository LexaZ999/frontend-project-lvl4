import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MessageBox = () => {
  const {
    messages,
    channels: { currentChannelId },
  } = useSelector((state) => state);
  const msgBox = React.createRef();

  useEffect(() => {
    msgBox.current.scrollTop = msgBox.current.scrollHeight;
  }, [msgBox]);

  const messageList = messages.ids
    .filter((id) => messages.entities[id].channelId === currentChannelId)
    .map((id) => (
      <div key={id} className="text-break mb-2">
        <b>{messages.entities[id].author}</b>
        {`: ${messages.entities[id].message}`}
      </div>
    ));

  return (
    <div
      ref={msgBox}
      id="messages-box"
      className="chat-messages overflow-auto px-5 "
    >
      {messageList}
    </div>
  );
};
export default MessageBox;
