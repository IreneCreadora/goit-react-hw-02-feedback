import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>
        <b>Good:</b> {good}
      </p>
      <p>
        <b>Neutral:</b> {neutral}
      </p>
      <p>
        <b>Bad:</b> {bad}
      </p>
      <p>
        <b>Total:</b> {total}
      </p>
      <p>
        <b>Positive feedback:</b> {positivePercentage}%
      </p>
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
