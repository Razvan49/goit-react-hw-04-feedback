import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, countFeedback }) => {
  // Calculează procentul feedback-urilor pozitive
  const countPercentage = () => {
    const percentage = Math.round((good / countFeedback) * 100);
    return percentage || 0;
  };
  // Informațiile pentru afișarea statisticilor
  const data = [
    { id: 1, text: 'Good: ', value: good },
    { id: 2, text: 'Neutral: ', value: neutral },
    { id: 3, text: 'Bad: ', value: bad },
    { id: 4, text: 'Total: ', value: countFeedback },
    {
      id: 5,
      text: 'Positive feedback: ',
      value: countPercentage(),
      percentage: '%',
    },
  ];

  return (
    <div className={style.statistics__section}>
      {/* Afișează statisticile */}
      {data.map(item => {
        return (
          <p className={style.statistics} key={item.id}>
            {item.text}
            {item.value}
            {item.percentage}
          </p>
        );
      })}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countFeedback: PropTypes.number.isRequired,
};
export default Statistics;
