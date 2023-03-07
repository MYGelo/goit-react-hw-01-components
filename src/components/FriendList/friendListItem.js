import PropTypes from 'prop-types';
import css from './friendList.module.css';
import clsx from 'clsx';

export function FriendListItem({
    avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", 
    name = "Anonymous", 
    isOnline = false,
}) {
    
    return (
        <li className={css.item}>
            <span className={clsx(css.status__offline, {[css["is-online"]]:isOnline,})}></span>
            <img className={css.avatar} src={avatar} alt='User Avatar' ></img>
            <p className={css.name}>{name}</p>
            </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    isOnline: PropTypes.bool,
};
