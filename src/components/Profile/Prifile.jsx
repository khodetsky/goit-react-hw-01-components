import PropTypes from 'prop-types';
import {  UserName, ProfileCard, Avatar, UserInfo, StatsList, Description } from './Profile.styled';
import { ProfileStats } from '../ProfileStats/ProfileStats';

export const Profile = ({ username, tag, location, avatar, stats: {followers,views,likes} }) => {
    return (
    <ProfileCard>
        <Description>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <UserName>{username}</UserName>
            <UserInfo>@{tag}</UserInfo>
            <UserInfo>{location}</UserInfo>
        </Description>
        <StatsList>
            <ProfileStats label="Followers" quantity={followers} />
            <ProfileStats label="Views" quantity={views} />
            <ProfileStats label ="Likes" quantity = {likes} />
        </StatsList>
    </ProfileCard>
    )
};

Profile.propTypes =  {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};


