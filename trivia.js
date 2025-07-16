function checkAnswers() {
  const a1 = document.getElementById("q1").value.trim().toLowerCase();
  const a2 = document.getElementById("q2").value.trim().toLowerCase();
  const a3 = document.getElementById("q3").value.trim().toLowerCase();

  let score = 0;

  if (a1 === "fps" || a1 === "first-person shooter") score++;
  if (a2 === "horror" || a2 === "scary") score++;
  if (a3 === "adventure" || a3 === "action-adventure") score++;

  document.getElementById("result").innerHTML =
    `You got ${score}/3 correct! ${score === 3 ? "Excellent!" : "Keep learning!"}`;
}
