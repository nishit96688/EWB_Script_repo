// Assignment 3 - Conditional Logic
let score = 85;
let grade;

if (score < 0 || score > 100) {
  console.log("Invalid score");
} else {
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  let status = score >= 60 ? "Passed" : "Failed";
  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}