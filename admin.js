const adminBody = document.getElementById("adminBody");
const adminDay = document.getElementById("adminDay");
const saveButton = document.getElementById("saveButton");
const message = document.getElementById("message");

const data = JSON.parse(localStorage.getItem("ritTimetable")) || {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: []
};

function createDay(day) {
    if (data[day].length === 0) {
        for (let i = 1; i <= 8; i++) {
            data[day].push({
                period: i,
                time: "",
                subject: "",
                faculty: ""
            });
        }
    }
}

function showTable(day) {

    createDay(day);

    adminBody.innerHTML = "";

    data[day].forEach(function(item, index) {

        // Create normal period row
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.period}</td>

            <td>
                <input type="text"
                       value="${item.time}"
                       placeholder="9:00-10:00"
                       data-index="${index}"
                       data-field="time">
            </td>

            <td>
                <input type="text"
                       value="${item.subject}"
                       placeholder="Subject"
                       data-index="${index}"
                       data-field="subject">
            </td>

            <td>
                <input type="text"
                       value="${item.faculty}"
                       placeholder="Faculty"
                       data-index="${index}"
                       data-field="faculty">
            </td>
        `;

        adminBody.appendChild(row);

        // Break after periods 2, 4 and 6
        if (item.period === 2 ||
            item.period === 4 ||
            item.period === 6) {

            const breakRow = document.createElement("tr");

            breakRow.innerHTML = `
                <td colspan="4" class="break-row">
                    ☕ BREAK
                </td>
            `;

            adminBody.appendChild(breakRow);
        }
    });
}


// Save changes when typing
adminBody.addEventListener("input", function(event) {

    if (event.target.tagName !== "INPUT") {
        return;
    }

    const index = event.target.dataset.index;
    const field = event.target.dataset.field;

    data[adminDay.value][index][field] = event.target.value;
});


// Change day
adminDay.addEventListener("change", function() {
    showTable(this.value);
});


// Save timetable
saveButton.addEventListener("click", function() {

    localStorage.setItem(
        "ritTimetable",
        JSON.stringify(data)
    );

    message.textContent = "✅ Timetable saved successfully!";
});


// Start with Monday
showTable("Monday");