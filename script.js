// ================================
// QUOTES
// ================================

const quotes = [
    "🌸 Small progress is still progress.",
    "🚀 Success starts with consistency.",
    "⭐ One task at a time.",
    "💖 Believe in yourself.",
    "🎯 Focus on the next step.",
    "🌈 Great things take time.",
    "🔥 Keep going, you're improving.",
    "🐼 You can do this!"
];

document.getElementById("quote").innerText =
quotes[Math.floor(Math.random() * quotes.length)];


// ================================
// MASCOT
// ================================

const mascotMessages = [
    "🐼 Let's finish today's goals!",
    "🌸 One task at a time.",
    "⭐ You're doing amazing!",
    "💖 Keep moving forward!",
    "🚀 Stay focused!"
];

setInterval(() => {

    document.getElementById("mascotText").innerText =
    mascotMessages[
        Math.floor(Math.random() * mascotMessages.length)
    ];

}, 5000);


// ================================
// TASK STORAGE
// ================================

let tasks = [];
let completedCount = 0;


// ================================
// ADD TASK
// ================================

function addTask(){

    let taskInput =
    document.getElementById("taskIn");

    let deadlineInput =
    document.getElementById("deadline");

    let taskText =
    taskInput.value.trim();

    let deadline =
    deadlineInput.value;

    if(taskText === ""){

        alert("Please enter a task.");

        return;
    }

    const task = {

        id: Date.now(),

        text: taskText,

        deadline: deadline,

        completed: false
    };

    tasks.push(task);

    renderTasks();

    saveData();

    taskInput.value = "";

    deadlineInput.value = "";
}


// ================================
// RENDER TASKS
// ================================

function renderTasks(){

    const taskList =
    document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const li =
        document.createElement("li");

        if(task.completed){

            li.classList.add("completed");
        }

        const stickerList = [
            "🐼",
            "🌈",
            "🎀",
            "⭐",
            "💖",
            "🦄",
            "🌸"
        ];

        let sticker =
        stickerList[
            Math.floor(Math.random()*stickerList.length)
        ];

        const taskInfo =
        document.createElement("div");

        taskInfo.innerHTML = `
            <strong>${task.text}</strong> ${task.completed ? sticker : ""}
            <br>
            <small>⏰ ${task.deadline || "No Deadline"}</small>
        `;

        const btnContainer =
        document.createElement("div");

        // COMPLETE BUTTON

        const completeBtn =
        document.createElement("button");

        completeBtn.innerText =
        "Complete";

        completeBtn.className =
        "completeBtn";

        completeBtn.onclick = () => {

            if(!task.completed){

                task.completed = true;

                completedCount++;

                launchConfetti();

                launchBalloons();

                showSuccessMessage();

                updateStats();

                saveData();

                renderTasks();
            }
        };

        // DELETE BUTTON

        const deleteBtn =
        document.createElement("button");

        deleteBtn.innerText =
        "Delete";

        deleteBtn.className =
        "deleteBtn";

        deleteBtn.onclick = () => {

            moveToReminder(task);

            tasks =
            tasks.filter(
                t => t.id !== task.id
            );

            renderTasks();

            updateStats();

            saveData();
        };

        btnContainer.appendChild(
            completeBtn
        );

        btnContainer.appendChild(
            deleteBtn
        );

        li.appendChild(taskInfo);

        li.appendChild(btnContainer);

        taskList.appendChild(li);

    });

    updateStats();
}


// ================================
// REMINDER SECTION
// ================================

function moveToReminder(task){

    const reminderList =
    document.getElementById("reminderList");

    const li =
    document.createElement("li");

    li.innerHTML =
    `🔔 Remember to do: ${task.text}`;

    reminderList.appendChild(li);

    alert(
    "💖 Don't give up! Try again later."
    );
}


// ================================
// STATS
// ================================

function updateStats(){

    let total =
    tasks.length;

    let completed =
    tasks.filter(
        t => t.completed
    ).length;

    let pending =
    total - completed;

    document.getElementById(
        "totalTasks"
    ).innerText = total;

    document.getElementById(
        "completedTasks"
    ).innerText = completed;

    document.getElementById(
        "pendingTasks"
    ).innerText = pending;

    let percent = 0;

    if(total > 0){

        percent =
        Math.round(
            (completed / total) * 100
        );
    }

    document.getElementById(
        "progressBar"
    ).style.width =
    percent + "%";

    document.getElementById(
        "progressText"
    ).innerText =
    percent + "% Completed";

    showBadge(completed);
}


// ================================
// BADGES
// ================================

function showBadge(completed){

    let badgeText = "";

    if(completed >= 50){

        badgeText =
        "👑 Productivity Queen";
    }

    else if(completed >= 20){

        badgeText =
        "🚀 Goal Crusher";
    }

    else if(completed >= 10){

        badgeText =
        "⭐ Rising Star";
    }

    else if(completed >= 5){

        badgeText =
        "🐣 Productivity Chick";
    }

    else if(completed >= 1){

        badgeText =
        "🌱 Starter Seed";
    }

    document.getElementById(
        "badgeArea"
    ).innerHTML =
    badgeText
    ?
    `<div class="badge">${badgeText}</div>`
    :
    "No badges yet.";
}


// ================================
// CELEBRATION
// ================================

function showSuccessMessage(){

    const messages = [

        "🌸 Amazing Job!",

        "🎉 Well Done!",

        "⭐ Keep Going!",

        "💖 Proud of You!",

        "🚀 Great Progress!"
    ];

    alert(
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ]
    );
}


// ================================
// CONFETTI
// ================================

function launchConfetti(){

    for(let i=0;i<60;i++){

        const confetti =
        document.createElement("div");

        confetti.classList.add(
            "confetti"
        );

        confetti.style.left =
        Math.random()*100 + "vw";

        confetti.style.backgroundColor =
        randomColor();

        document.body.appendChild(
            confetti
        );

        setTimeout(()=>{

            confetti.remove();

        },4000);
    }
}


// ================================
// BALLOONS
// ================================

function launchBalloons(){

    for(let i=0;i<25;i++){

        const balloon =
        document.createElement("div");

        balloon.classList.add(
            "balloon"
        );

        balloon.innerHTML = "🎈";

        balloon.style.left =
        Math.random()*100 + "vw";

        document.body.appendChild(
            balloon
        );

        setTimeout(()=>{

            balloon.remove();

        },5000);
    }
}


// ================================
// RANDOM COLORS
// ================================

function randomColor(){

    const colors = [

        "#ff4757",

        "#ffa502",

        "#2ed573",

        "#1e90ff",

        "#a55eea",

        "#ff6b81"
    ];

    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];
}


// ================================
// CALENDAR EVENTS
// ================================

function addEvent(){

    const date =
    document.getElementById(
        "eventDate"
    ).value;

    const text =
    document.getElementById(
        "eventText"
    ).value;

    if(date === "" || text === ""){

        alert(
        "Please fill both fields."
        );

        return;
    }

    const li =
    document.createElement("li");

    li.innerHTML =
    `📅 ${date} - ${text}`;

    document.getElementById(
        "eventList"
    ).appendChild(li);

    document.getElementById(
        "eventDate"
    ).value = "";

    document.getElementById(
        "eventText"
    ).value = "";
}


// ================================
// LOCAL STORAGE
// ================================

function saveData(){

    localStorage.setItem(
        "studentTasks",
        JSON.stringify(tasks)
    );
}

function loadData(){

    const stored =
    localStorage.getItem(
        "studentTasks"
    );

    if(stored){

        tasks =
        JSON.parse(stored);

        renderTasks();
    }
}

loadData();
