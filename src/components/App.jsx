import React from 'react';

import user from 'data/user.json';
import { Profile } from './Profile/profile';

import data from 'data/data.json';
import { Statistics } from './Statistics/statistics';

import friends from 'data/friends.json';
import {FriendList} from './FriendList/friendList';
 


export const App = () => {
  return (
    <>
     <section name="profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>

      <section name="statistics">
        
      
      <Statistics stats={data} />
        
      </section>

      <section name="friendList">
      <FriendList friends={friends} />
      </section>

      </>
      );
};

