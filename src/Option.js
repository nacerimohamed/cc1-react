function Option({ text, questionId, onClick, isSelected }) {
  return (
    <button
  onClick={() => onClick(questionId, text)}
  className={isSelected ? "selected" : ""}
>
  {text}
</button>

  );
}

export default Option;
