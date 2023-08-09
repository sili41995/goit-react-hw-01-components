import PropTypes from 'prop-types';
import { Section, List, Item, Percentage, Title } from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default Statistics;
