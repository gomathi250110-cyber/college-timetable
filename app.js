const timetableBody = document.getElementById("timetableBody");
const daySelect = document.getElementById("daySelect");

const defaultData = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: []
};

// Admin-ல் save செய்த data-வை படிக்கிறது
const savedData = JSON.parse(localStorage.getItem("ritTimetable"));

const timetable = savedData || defaultData;

function createDay(day) {

    if (!timetable[day] || timetable[day].length === 0) {

        timetable[day] = [];

        for (let i = 1; i <= 8; i++) {

            timetable[day].push({
                period: i,
                time: "",
                subject: "",
                faculty: ""
            });
        }
    }
}

function displayTimetable(day) {

    createDay(day);

    timetableBody.innerHTML = "";

    timetable[day].forEach(function(item) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.period}</td>
            <td>${item.time}</td>
            <td>${item.subject}</td>
            <td>${item.faculty}</td>
        `;

        timetableBody.appendChild(row);

        // Break after Period 2, 4 and 6
        if (
            item.period === 2 ||
            item.period === 4 ||
            item.period === 6
        ) {

            const breakRow = document.createElement("tr");

            breakRow.innerHTML = `
                <td colspan="4" class="break-row">
                    ☕ BREAK
                </td>
            `;

            timetableBody.appendChild(breakRow);
        }
    });
}

daySelect.addEventListener("change", function() {

    displayTimetable(this.value);

});

displayTimetable("Monday");
       
