function optimizeTask() {
    // Step 1: Increase the number by 1
    let countElement = document.getElementById("nav-btn");
    let currentCount = parseInt(countElement.innerText);
    countElement.innerText = currentCount + 1;

    // Step 2: Decrease assigned task count by 1
    let assignedElement = document.getElementById("task");
    let assignedCount = parseInt(assignedElement.innerText);
    assignedElement.innerText = assignedCount - 1;

    // Step 3: Change button appearance (optional)
    let btn = document.getElementById("optimize-btn");
    btn.innerText = "Completed";
    btn.style.backgroundColor = "#A5B4FC";
    btn.style.border = "none";
alert (" board Update Successfully")

const container = document.getElementById('activity-container')
const p = document.createElement('p');
const now = new Date();
    const timeString = now.toLocaleTimeString(); 

p.innerText = `You have Completed the 
Task: Optimize Home page  at ${timeString}


`
       container.appendChild(p)
       container.prepend(p);
    
}