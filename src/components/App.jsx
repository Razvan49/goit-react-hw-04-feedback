import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Adaugă feedback și actualizează starea
  addFeedback = value => {
    this.setState({
      [value]: this.state[value] + 1,
    });
  };

  // Calculează numărul total de feedback-uri
  countFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  render() {
    const totalFeedback = this.countFeedback();

    return (
      <>
        {/* Sectiunea de feedback */}
        <section>
          <Title title={'Please leave feedback'} />
          <Feedback addFeedback={this.addFeedback} />
        </section>
        {/* Sectiunea de statistici */}
        <section>
          {totalFeedback === 0 && <Notify message="There is no feedback!" />}
          {totalFeedback !== 0 && <Title title={'Statistics'} />}
          {totalFeedback !== 0 && (
            <Statistics {...this.state} countFeedback={totalFeedback} />
          )}
        </section>
      </>
    );
  }
}

// Componenta pentru titlu
const Title = ({ title }) => {
  return <h2 className="section__title">{title}</h2>;
};

// Componenta pentru notificare
const Notify = ({ message }) => {
  return <h3 className="message">{message}</h3>;
};
