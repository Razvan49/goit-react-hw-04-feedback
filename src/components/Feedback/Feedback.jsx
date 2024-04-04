import style from './Feedback.module.css';

const Feedback = ({
  goodFb,
  neutralFb,
  badFb,
  setBad,
  setGood,
  setNeutral,
}) => {
  const data = [
    { id: 1, value: 'good', text: 'Good' },
    { id: 2, value: 'neutral', text: 'Neutral' },
    { id: 3, value: 'bad', text: 'Bad' },
  ];
  const handleClick = e => {
    const value = e.target.value;
    if (value === 'good') {
      setGood(goodFb + 1);
    }
    if (value === 'neutral') {
      setNeutral(neutralFb + 1);
    }
    if (value === 'bad') {
      setBad(badFb + 1);
    }
  };
  return (
    <div className={style.buttons__section}>
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

export default Feedback;
