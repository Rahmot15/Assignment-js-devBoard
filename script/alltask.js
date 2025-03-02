// all task select and increase 
const allTasks = document.querySelectorAll(".all-task");

for (let allTask of allTasks) {
  allTask.addEventListener("click", function () {
    alert("Board update Successfully");
    this.disabled = true;

    const decreasedNum = document.getElementById("decreased");
    const increasedNum = document.getElementById("increased");

    decreasedNum.innerText = parseInt(decreasedNum.innerText) -1
    increasedNum.innerText = parseInt(increasedNum.innerText) +1

    const clearAll = document.getElementById('clear-all')
    
  });
}



// 6 number box 
document.getElementById('box-6')
  .addEventListener("click", function () {
  alert("Board update Successfully");
  alert("congrates!!! You have completed all the current task");

  this.disabled = true;

  const decreasedNum = document.getElementById("decreased");
  const increasedNum = document.getElementById("increased");

  decreasedNum.innerText = parseInt(decreasedNum.innerText) -1
  increasedNum.innerText = parseInt(increasedNum.innerText) +1

  const clearAll = document.getElementById('clear-all')
  
});