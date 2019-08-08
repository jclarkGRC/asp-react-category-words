import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
      <h1>Welcome to Category Words!</h1>
      <p>This is a simple yet fun word game. The idea is to guess as many words as you can to the related topic chosen at the beginning of the game. The trick is you only have 30 seconds for each guess. If you can't guess any more words your time is up! Good Luck!</p>
      <p>Choose game from the left menu to start playing..</p>
  </div>
);

export default connect()(Home);
