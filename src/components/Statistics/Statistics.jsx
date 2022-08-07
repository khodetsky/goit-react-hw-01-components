import PropTypes from 'prop-types';
import StatList from '../StatList/StatList';
import {StatContainer, StatTitle} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
    if (title) {
        return (
        <StatContainer>
            <StatTitle >{title}</StatTitle>
            <StatList stats={stats} />
        </StatContainer>
    );
    } 
    return (
        <StatContainer>
            <StatList stats={stats} />
        </StatContainer>
    );
    
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
}