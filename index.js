// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
function superbowlWin(arr) {
    for (const item of arr) {
        if (find(item) === true) {
            return item.year
        }
    }
}

function find(item) {
    return (item.result==="W")
}


console.log(superbowlWin(record));

