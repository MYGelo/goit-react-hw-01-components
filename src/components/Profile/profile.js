import css from './profile.module.css';
import propTypes from 'prop-types';

export function Profile({ 
    username, 
    tag, 
    location, 
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats}) {
      console.log(stats);
    return (
    <>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>

       
        <ul className={css.stats}>
          {Object.keys(stats).map((key) => {
           return (
                <li key={key} className={css.stats__item}>
                   <span className={css.stats__label}>{key}</span>
                  <span className={css.stats__quantity}>{stats[key]}</span>
                 </li>
              );
             })}
       </ul>
    
      </div>
    </>
    );
  };
 
  Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar:  propTypes.string.isRequired,
  }

    // stats: propTypes.objectOf(
    //   propTypes.shape({
    //     followers: propTypes.number.isRequired,
    //     views: propTypes.number.isRequired,
    //     likes: propTypes.number.isRequired,
    //   })
    // ).isRequired