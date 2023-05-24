import PropTypes from 'prop-types';
import {
  StatisticsItem,
  ItemLabel,
  ItemPercentage,
} from './StatisticsElement.styled';

export const StatisticsElement = ({ label, percentage }) => {
  return (
    <StatisticsItem>
      <ItemLabel>{label}</ItemLabel>
      <ItemPercentage>{percentage}%</ItemPercentage>
    </StatisticsItem>
  );
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
