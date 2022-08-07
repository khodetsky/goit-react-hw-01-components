import PropTypes from 'prop-types';
import { StatusContainer } from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    let statusColor;
    if (isOnline) {
        statusColor = "green";
    }
    else {
        statusColor = "red";
    }
    return (
        <>
            <StatusContainer style={{ backgroundColor: statusColor}} ></StatusContainer>
            <img src={avatar} alt="User avatar" width="48" />
            <p >{name}</p>
        </>
    );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}