import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Junim" timeAgo="Hoje as 14:00" content="Voa" avatar="https://source.unsplash.com/random" />
      </ApprovalCard>
      <br />
      <ApprovalCard>
        <CommentDetail author="Jorge" timeAgo="Hoje as 23:00" content="Vuei" avatar="https://source.unsplash.com/random" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
