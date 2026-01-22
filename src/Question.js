import Option from "./Option";

function Question({ question, onOptionSelect, answers, isSubmitted }) {
  return (
    <div>
      <h3>{question.question}</h3>

      {question.options.map((option, index) => {
        const isCorrect = option === question.correct;
        const isSelected = answers[question.id] === option;

        return (
          <div key={index}>
            <Option
              text={option}
              questionId={question.id}
              onClick={onOptionSelect}
              isSelected={isSelected}
            />

            {isSubmitted && isSelected && (
  <span className={isCorrect ? "correct" : "wrong"}>
    {isCorrect ? "✔ Bonne réponse" : "✖ Mauvaise réponse"}
  </span>
)}

          </div>
        );
      })}
    </div>
  );
}

export default Question;
