import css from './friendList.module.css';

export function FriendList ({
    friends,
}) {
    return (
        <>
       <ul className={css.friends}>
        {  friends.map(({id, avatar, name, isOnline }) => {
            return (
                <li className={css.item}>
                 
                {isOnline === true 
                ?    <span className={css.isOnline}></span> 
                :    <span className={css.isOffline}></span>
                 }
                
                <img className={css.avatar} src={avatar} alt='User Avatar' ></img>
                <p className={css.name}>{name}</p>
            </li>
            );
        }

        )

        }
       </ul>
        </>
    )

}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired,
        })
    ).isRequired
};