import PropTypes from 'prop-types';
import { StatListElement } from "../StatListElement/StatListElement";
import { StatListStyle, StatListElementStyle } from './StatList.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function StatList({ stats }) {
    return (
        <StatListStyle>
            {stats.map(elem => (
                <StatListElementStyle key={elem.id} style={{backgroundColor: getRandomHexColor()}}>
                    <StatListElement label={elem.label} percentage={elem.percentage} />
                </StatListElementStyle>
            ))}
        </StatListStyle>)
};

export default StatList;

StatList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.object), 
}
