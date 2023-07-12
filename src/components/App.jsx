// import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';
import { Wrapper } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFedback = evt => {
    const {
      target: { textContent },
    } = evt;

    switch (textContent) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;

      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;

      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback() || 0);
  };

  const total = countTotalFeedback();

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFedback}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Wrapper>
  );
}
