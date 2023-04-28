import React from 'react';

export default function Message({ found, visible }) {
  return (
    <div className={visible ? 'message visible' : 'message hidden'}>
      <span className={found ? 'message-text found' : 'message-text not-found'}>
        {found ? 'Found \'em!' : 'Sorry, try again.'}
      </span>
    </div>
  );
}
