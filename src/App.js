import React from 'react';
import faker from 'faker';
import './App.css';
// import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import 'semantic-ui-css/semantic.min.css';

const App = () => 
    {
      return (
    <div className="ui  container comments">
      <ApprovalCard
      
        author="hafiz bro"
        date="3:30"
        comment="nice"
        avatar={faker.image.avatar()}
      />
    
      <ApprovalCard
        author="alid bro"
        date="4:30"
        comment="awesome"
        avatar={faker.image.avatar()}
      />
      <ApprovalCard
        author="bunty"
        date="5:30"
        comment="Fablous"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

export default App;


