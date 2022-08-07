import PropTypes from 'prop-types';
import { StatsListElement } from './ProfileStats.styled';

export const ProfileStats = ({ label, quantity }) => {
    return (
        <StatsListElement>
            <span >{label}</span>
            <b >{quantity}</b>
        </StatsListElement>
    )
};

ProfileStats.propTypes = {
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
};