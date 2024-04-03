import PropTypes from 'prop-types';
import style from './Feedback.module.css';

const Feedback = ({ addFeedback }) => {
  // Datele pentru butoanele de feedback
  const data = [
    { id: 1, value: 'good', text: 'Good' },
    { id: 2, value: 'neutral', text: 'Neutral' },
    { id: 3, value: 'bad', text: 'Bad' },
  ];

  // Funcția apelată la click pe buton
  const handleClick = e => {
    const value = e.target.value;
    addFeedback(value);
    console.log(value);
  };
  return (
    <div className={style.buttons__section}>
      {/* Afișează butoanele de feedback */}
      {data.map(btn => {
        const { id, value, text } = btn;
        return (
          <button
            key={id}
            className={style.buttons}
            value={value}
            onClick={handleClick}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

Feedback.propTypes = {
  addFeedback: PropTypes.func.isRequired,
};
export default Feedback;
