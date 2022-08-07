import PropTypes from 'prop-types';

export const StatListElement = ({label, percentage }) => {
    return (
        <>
            <span >{label}</span>
            <span >{`${percentage}%`}</span>
        </>
    );
}

StatListElement.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}