// add history
// box 1
document.getElementById("box-1").addEventListener("click", function () {
  const clrHistory = document.getElementById("add-history");
  const addParent = document.getElementById("add-parent");

  const newParent = document.createElement("p");
  addParent.appendChild(newParent);

  const currentTime = new Date().toLocaleTimeString();
  const addTitle = document.getElementById("title-1").innerText;
  newParent.innerText = `You have Complete The Task ${addTitle} at ${currentTime}`;
  newParent.classList.add("add-style");
});


// box 2
document.getElementById("box-2").addEventListener("click", function () {
    const clrHistory = document.getElementById("add-history");
    const addParent = document.getElementById("add-parent");
  
    const newParent = document.createElement("p");
    addParent.appendChild(newParent);
  
    const currentTime = new Date().toLocaleTimeString();
    const addTitle = document.getElementById("title-2").innerText;
    newParent.innerText = `You have Complete The Task ${addTitle} at ${currentTime}`;
    newParent.classList.add("add-style");
  });


// box 3
document.getElementById("box-3").addEventListener("click", function () {
    const clrHistory = document.getElementById("add-history");
    const addParent = document.getElementById("add-parent");
  
    const newParent = document.createElement("p");
    addParent.appendChild(newParent);
  
    const currentTime = new Date().toLocaleTimeString();
    const addTitle = document.getElementById("title-3").innerText;
    newParent.innerText = `You have Complete The Task ${addTitle} at ${currentTime}`;
    newParent.classList.add("add-style");
  });


// box 4
document.getElementById("box-4").addEventListener("click", function () {
    const clrHistory = document.getElementById("add-history");
    const addParent = document.getElementById("add-parent");
  
    const newParent = document.createElement("p");
    addParent.appendChild(newParent);
  
    const currentTime = new Date().toLocaleTimeString();
    const addTitle = document.getElementById("title-4").innerText;
    newParent.innerText = `You have Complete The Task ${addTitle} at ${currentTime}`;
    newParent.classList.add("add-style");
  });


// box 5
document.getElementById("box-5").addEventListener("click", function () {
    const clrHistory = document.getElementById("add-history");
    const addParent = document.getElementById("add-parent");
  
    const newParent = document.createElement("p");
    addParent.appendChild(newParent);
  
    const currentTime = new Date().toLocaleTimeString();
    const addTitle = document.getElementById("title-5").innerText;
    newParent.innerText = `You have Complete The Task ${addTitle} at ${currentTime}`;
    newParent.classList.add("add-style");
  });


// box 6
document.getElementById("box-6").addEventListener("click", function () {
    const clrHistory = document.getElementById("add-history");
    const addParent = document.getElementById("add-parent");
  
    const newParent = document.createElement("p");
    addParent.appendChild(newParent);
  
    const currentTime = new Date().toLocaleTimeString();
    const addTitle = document.getElementById("title-6").innerText;
    newParent.innerText = `You have Complete The Task ${addTitle} at ${currentTime}`;
    newParent.classList.add("add-style");
  });





// clear history
document.getElementById("clear-all").addEventListener("click", function () {
  const clrHistory = document.getElementById("add-parent");
  clrHistory.style.display = "none";
});
