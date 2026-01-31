const papers = document.querySelectorAll(".paper");
const book = document.getElementById("book");

papers.forEach((paper, index) => {
    paper.addEventListener("click", () => {
        if (!paper.classList.contains("flipped")) {
            paper.classList.add("flipped");
            paper.style.zIndex = index + 1;
            
            if(index === 0) book.style.transform = "translateX(50%)";
        } else {
            paper.classList.remove("flipped");
            paper.style.zIndex = 3 - index;
            
            if(index === 0) book.style.transform = "translateX(0%)";
        }
    });
});

let current = "";
const display = document.getElementById("display");

function append(v) { 
    current += v; 
    display.innerText = current; 
}
function clearCalc() { 
    current = ""; 
    display.innerText = "0"; 
}
function calculate() {
    try {
        const result = eval(current);
        display.innerText = Number.isInteger(result) ? result : result.toFixed(2);
        current = display.innerText;
        
        const bubble = document.querySelector('.thought-bubble');
        bubble.style.transform = "scale(1.2)";
        setTimeout(() => bubble.style.transform = "scale(1)", 200);
        
    } catch {
        display.innerText = "Hélas...";
        current = "";
    }
              }
