import propTypes from 'prop-types';
import { StatisticsItem } from 'components/Component.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <StatisticsItem>
        <b>Good:</b> {good}
      </StatisticsItem>
      <StatisticsItem>
        <b>Neutral:</b> {neutral}
      </StatisticsItem>
      <StatisticsItem>
        <b>Bad:</b> {bad}
      </StatisticsItem>
      <StatisticsItem>
        <b>Total:</b> {total}
      </StatisticsItem>
      <StatisticsItem>
        <b>Positive feedback:</b> {positivePercentage}%
      </StatisticsItem>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
export default Statistics;
