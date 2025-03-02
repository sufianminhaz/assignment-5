

const btn = document.getElementById("color-btn");


const colors = ["#8B0000", "green", "purple", "orange", "pink", "yellow", "teal" ,"gray","state","#8B0000", "#4B0082", "#2F4F4F", "#800080", "#191970", "#483D8B", "#556B2F", "#8B4513", "#4682B4","blue", "#9932CC"];
let colorIndex = 0; 

btn.addEventListener("click", function () {
    
    document.body.style.backgroundColor = colors[colorIndex];

    
    colorIndex = (colorIndex + 1) % colors.length;
});



