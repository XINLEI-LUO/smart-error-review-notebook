# Analytics Design

## Objective

The goal is to transform mistake records into actionable learning insights. Instead of only storing questions, the app measures learning behaviour and recommends what to review next.

## Core analytical questions

1. Which subjects contain the most unresolved mistakes?
2. Which knowledge tags have the highest error rate?
3. Which questions should be reviewed today?
4. Is the learner's accuracy improving over time?
5. Which questions are repeatedly answered incorrectly?

## Key metrics

| Metric | Definition | Purpose |
|---|---|---|
| Total questions | Count of saved questions | Measures knowledge base size |
| Due today | Questions with next review date <= today | Creates daily action list |
| Total attempts | Number of completed review attempts | Measures engagement |
| Accuracy | Correct attempts / total attempts | Measures performance |
| Error rate by tag | Wrong attempts for tag / total attempts for tag | Identifies weak knowledge points |
| Mastered count | Questions marked as mastered | Tracks perceived mastery |
| Correct streak | Consecutive correct answers for a question | Controls review interval |

## Prioritisation logic

The smart review score combines four signals:

1. overdue status;
2. historical error rate;
3. time since last review;
4. low correct streak.

The result is not a black-box model. It is an interpretable rule-based decision system, which is appropriate for an MVP and easier for users to trust.

## Business analytics value

This project demonstrates how analytics can support operational decisions. In this case, the decision is: "Which question should the learner review next?" The same logic maps to business use cases such as customer prioritisation, churn risk queues, support ticket ranking, and lead scoring.
