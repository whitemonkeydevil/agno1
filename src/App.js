import React from 'react';
import lassun from './lassun.svg';
import './App.css';
import Header from './Header/Header'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import Body from './Body/Body'
import Footer from './Footer/Footer'
 

function App() {
  return (
    <div>
      <Header websiteName={'Kallu Koyla'}/>
      <ProfileHeader name={'Siddhesh Koli'} logo2={garlic}/>
      <Body college={'Sakec'} age={20}/>
      <Footer bio={'will sell KNOWLEDGE in wholesale'}/>
    </div>
  );
}

export default App ;
