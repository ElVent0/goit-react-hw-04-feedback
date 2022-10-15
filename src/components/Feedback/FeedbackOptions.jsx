import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => {
  const getCapitalize = word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  };

  const getArrayOfData = () => {
    const separateObject = obj => {
      const res = [];
      const keys = Object.keys(obj);
      keys.map(key => {
        res.push({
          name: key,
          value: obj[key],
        });
        return key;
      });
      return res;
    };
    const options = { good, neutral, bad };
    const arrayOfData = separateObject(options);
    return arrayOfData;
  };

  return (
    <>
      <ul className={css.list}>
        {getArrayOfData().map(item => {
          return (
            <li key={item.name} className={css.item}>
              <button
                name={item.name}
                className={css.button}
                onClick={onLeaveFeedback}
              >
                {getCapitalize(item.name)}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
