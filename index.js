// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
function superbowlWin(arr) {
    for (const item of arr) {
        if (item.result === "W") {
            return item.year
        }
    }
}
const findAWin = record.find(item => item.result === "W");

console.log(findAWin);

console.log(superbowlWin(record));

