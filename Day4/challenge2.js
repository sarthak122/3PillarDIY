let score = Number(prompt("enter your score"));
switch (true) {
  case score >= 80:
    console.log("A");
    break;
  case score >= 70:
    console.log("B");
    break;
  case score >= 60:
    console.log("C");
    break;
  case score >= 50:
    console.log("D");
    break;
  case score < 50:
    console.log("F");
    break;
  default:
    console.log("no score assigned");
}
let month = prompt("enter month to check seasons");
switch (month) {
  case "september":
  case "october":
  case "November":
    console.log("the season is Autumn");
    break;
  case "december":
  case "january":
  case "febuary":
    console.log("the season is Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("the season is Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("the season is Summer");
    break;
  default:
    console.log("invalid Month");
}
let weekDay = prompt("What is the day today?");
if (weekDay == "saturday" || weekDay == "sunday") {
  console.log(`${weekDay} is a weekend`);
} else if (
  weekDay == "monday" ||
  weekDay == "tuesday" ||
  weekDay == "wednesday" ||
  weekDay == "thursday" ||
  weekDay == "friday"
) {
  console.log(`${weekDay} is a working day`);
} else {
  console.log("invalid weekDay");
}
