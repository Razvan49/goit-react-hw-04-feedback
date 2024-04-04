import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [goodFb, setGood] = useState(0);
  const [neutralFb, setNeutral] = useState(0);
  const [badFb, setBad] = useState(0);

  const totalFeedback = goodFb + badFb + neutralFb;
  return (
    <>
      <section>
        <Title title={'Please leave feedback'} />
        <Feedback
          goodFb={goodFb}
          setGood={setGood}
          neutralFb={neutralFb}
          setNeutral={setNeutral}
          badFb={badFb}
          setBad={setBad}
        />
      </section>
      <section>
        {totalFeedback === 0 && <Notify message="There is no feedback!" />}
        {totalFeedback !== 0 && <Title title={'Statistics'} />}
        {totalFeedback !== 0 && (
          <Statistics
            good={goodFb}
            neutral={neutralFb}
            bad={badFb}
            countFeedback={totalFeedback}
          />
        )}
      </section>
    </>
  );
};

const Title = ({ title }) => {
  return <h2 className="section__title">{title}</h2>;
};

const Notify = ({ message }) => {
  return <h3 className="message">{message}</h3>;
};
