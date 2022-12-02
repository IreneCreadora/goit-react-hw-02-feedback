import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(currentFeedback => {
    return (
      <button
        key={currentFeedback}
        type="button"
        onClick={onLeaveFeedback}
        name={currentFeedback}
      >
        {currentFeedback}
      </button>
    );
  });
};
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired),
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
