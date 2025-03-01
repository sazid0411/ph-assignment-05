// All time logics 
const date = new Date();
// day
const day = document.getElementById('day');
day.innerText = date.toLocaleString("en-US", { weekday: "long" }) + ",";
// date
const dates = document.getElementById('dates');
dates.innerText = date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

// Current Time
const currentTime = date.toLocaleTimeString("en-US", { hour12: true })

// 

// discover to blogs
const discover = document.getElementById("discover-section").addEventListener("click", function () {
    window.location.href = "./blog.html";
});

// complete Buttons 
const boardCount = document.getElementById("board-count");
const completeBtns = document.querySelectorAll(".complete-btn");
// activity
const history = document.getElementById("history");



let count = completeBtns.length;
boardCount.innerText = count


// complete btn
for (const cBtn of completeBtns) {

    cBtn.addEventListener("click", function (event) {
        alert("Board Updated Successfully")

        // manipulate the btn
        tBtn = event.target;
        tBtn.classList.remove("bg-[#3752FD]");
        tBtn.classList.remove("text-white");
        tBtn.classList.add("bg-gray-300");
        tBtn.classList.add("text-gray-500");
        tBtn.setAttribute("disabled", false)

        // decrease the count of task assigned
        count--;
        boardCount.innerText = count

        // nav bar counter 
        const taskCount = document.getElementById("task-count");
        let tCount = parseInt(taskCount.innerText)
        tCount++

        taskCount.innerText = tCount;


        // 

        const activityTitle = event.target.parentElement.parentElement.querySelector(".title").innerText;


        const msg = `<div class="max-w-[318px] p-3">
                        <h1>You have Complete The Task "${activityTitle}" at ${currentTime} </h1>
                    </div>`;

        history.innerHTML += msg
    })
}

//  change body color

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

