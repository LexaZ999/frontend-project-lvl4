import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MessageBox = () => {
  const { messages } = useSelector((state) => state);
  const messagesContainer = React.createRef();

  useEffect(() => {
    messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight;
  }, [messagesContainer]);

  const messageList = messages.ids.map((id) => (
    <div key={id} className="text-break mb-2">
      <b>{messages.entities[id].author}</b>
      {`: ${messages.entities[id].message}`}
    </div>
  ));

  return (
    <div
      ref={messagesContainer}
      id="messages-box"
      className="chat-messages overflow-auto px-5 "
    >
      {messageList}
    </div>
  );
};
export default MessageBox;
