import css from './friendList.module.css';
import propTypes from 'prop-types';
import { FriendListItem } from './friendListItem';

export function FriendList (props) {
    const {friends} = props;
    return (
        <>
       <ul className={css.friends}>
        {  friends.map(({id, avatar, name, isOnline }) => {
            return ( 
                    <FriendListItem 
                    key = {id}
                    name = {name}
                    avatar = {avatar}
                    isOnline = {isOnline}>
                    
                    </FriendListItem>
                    
                
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


               