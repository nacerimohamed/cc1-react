function ScoreCard({ score, totalQuestions, isSubmitted }) {
  if (!isSubmitted) return null;

  return (
    <footer>
      <h2>
        Votre score : {score} / {totalQuestions}
      </h2>
    </footer>
  );
}

export default ScoreCard;
