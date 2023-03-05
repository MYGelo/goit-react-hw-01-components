import React from 'react';

import user from 'data/user.json';
import { Profile } from './Profile/profile';

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

      <section>
        <>
        <h1> sec2</h1>
        </>
      </section>

      </>
      );
};

