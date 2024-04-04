import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, countFeedback }) => {
  const countPercentage = () => {
    const percentage = Math.round((good / countFeedback) * 100);
    return percentage || 0;
  };
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

export default Statistics;
