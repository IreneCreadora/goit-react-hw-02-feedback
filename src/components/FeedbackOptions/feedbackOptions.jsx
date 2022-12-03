import propTypes from 'prop-types';
import { Button } from 'components/Component.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(currentFeedback => {
    return (
      <Button
        key={currentFeedback}
        type="button"
        onClick={onLeaveFeedback}
        name={currentFeedback}
      >
        {currentFeedback}
      </Button>
    );
  });
};
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired),
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
