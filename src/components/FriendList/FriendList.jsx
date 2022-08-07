import PropTypes from 'prop-types';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import { FriendListStyle,FriendListContainer , FriendsListItemStyle } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        <FriendListContainer>
            <FriendListStyle>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendsListItemStyle key={id}>
                        <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
                    </FriendsListItemStyle>
                ))}
            </FriendListStyle>
        </FriendListContainer>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
}