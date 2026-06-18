# Data Dictionary

## Question object

| Field | Type | Description |
|---|---|---|
| id | string | Unique question ID |
| category | string | Subject or category, such as Mathematics or English |
| type | string | single, multiple, or blank |
| prompt | string | Question text |
| image | string/null | Optional base64 image |
| options | array | Choice options for single/multiple questions |
| answer | string/array | Correct answer |
| explanation | string | Explanation shown after answering |
| tags | array | Knowledge point tags |
| mastered | boolean | Whether the user marked the question as mastered |
| attempts | number | Total attempts |
| correctCount | number | Number of correct attempts |
| wrongCount | number | Number of wrong attempts |
| correctStreak | number | Consecutive correct attempts |
| lastReviewedAt | string/null | Last review date/time |
| nextReviewAt | string/null | Next scheduled review date/time |
| history | array | Attempt-level records |

## Attempt history object

| Field | Type | Description |
|---|---|---|
| questionId | string | Linked question ID |
| reviewedAt | string | Attempt timestamp |
| userAnswer | string/array | User's submitted answer |
| isCorrect | boolean | Whether the answer was correct |
| category | string | Category at the time of review |
| tags | array | Tags at the time of review |

## Notes

The localStorage design is sufficient for a personal MVP. For a production version, these objects should be migrated to a relational database or document database with user authentication.
