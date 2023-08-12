import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';

const App = () => {

  return (
    <HomeRoute/>
      // <div className="photo-list">
      //   <TopNavigationBar />
      //   <PhotoList/>
      // </div>
   
  );
};

export default App;
