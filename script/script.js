// All time logics 
const date = new Date();
// day
const day = document.getElementById('day');
day.innerText = date.toLocaleString("en-US", { weekday: "long" }) + ",";
// date
const dates = document.getElementById('dates');
dates.innerText = date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

// discover to blogs
const discover = document.getElementById("discover-section").addEventListener("click", function () {
    window.location.href = "blog.html";
});

// activity
const history = document.getElementById("history");

// get assigned task count 
const boardCount = document.getElementById("board-count");
const completeBtns = document.querySelectorAll(".complete-btn");

// assigned task count
let count = completeBtns.length;
boardCount.innerText = count
// complete btn
for (const cBtn of completeBtns) {

    cBtn.addEventListener("click", function (event) {
        alert("Board Updated Successfully");

        tBtn = event.target;

        // manipulate the btn
        tBtn.classList.remove("bg-[#3752FD]");
        tBtn.classList.remove("text-white");
        tBtn.classList.add("bg-gray-300");
        tBtn.classList.add("text-gray-500");
        tBtn.setAttribute("disabled", false)

        // decrease the count of task assigned
        count--;
        boardCount.innerText = count

        // alert after complete all task
        if (count === 0) {
            alert("Congrats you have done all the current task");
        }

        // nav bar counter 
        const taskCount = document.getElementById("task-count");
        let tCount = parseInt(taskCount.innerText)
        tCount++
        taskCount.innerText = tCount;

        // Current Time
        const currentTime = new Date().toLocaleTimeString()
        const activityTitle = tBtn.parentElement.parentElement.querySelector(".title").innerText;

        // activity massage after complete a task
        const msg = `<div class="max-w-[318px] p-3">
                        <h1>You have Complete The Task "${activityTitle}" at ${currentTime} </h1>
                    </div>`;

        history.innerHTML += msg
    })
}

//  change body theme color
document.getElementById("theme-btn").addEventListener("click", function () {
    const body = document.getElementById("body")
    let randomColor = '#' + Math.random().toString(16).slice(2, 8);

    body.style.backgroundColor = '';
    body.style.backgroundColor = randomColor;

})

// clear activity
document.getElementById("clear").addEventListener("click", function () {
    history.innerHTML = ""
})

