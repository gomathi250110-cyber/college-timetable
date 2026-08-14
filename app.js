const timetable = {
    Monday: [
        ["1", "Editable", "Subject", "Faculty", "Room"],
        ["2", "Editable", "Subject", "Faculty", "Room"],
        ["3", "Editable", "Subject", "Faculty", "Room"],
        ["4", "Editable", "Subject", "Faculty", "Room"],
        ["5", "Editable", "Subject", "Faculty", "Room"],
        ["6", "Editable", "Subject", "Faculty", "Room"],
        ["7", "Editable", "Subject", "Faculty", "Room"],
        ["8", "Editable", "Subject", "Faculty", "Room"]
    ],

    Tuesday: [
        ["1", "Editable", "Subject", "Faculty", "Room"],
        ["2", "Editable", "Subject", "Faculty", "Room"],
        ["3", "Editable", "Subject", "Faculty", "Room"],
        ["4", "Editable", "Subject", "Faculty", "Room"],
        ["5", "Editable", "Subject", "Faculty", "Room"],
        ["6", "Editable", "Subject", "Faculty", "Room"],
        ["7", "Editable", "Subject", "Faculty", "Room"],
        ["8", "Editable", "Subject", "Faculty", "Room"]
    ],

    Wednesday: [
        ["1", "Editable", "Subject", "Faculty", "Room"],
        ["2", "Editable", "Subject", "Faculty", "Room"],
        ["3", "Editable", "Subject", "Faculty", "Room"],
        ["4", "Editable", "Subject", "Faculty", "Room"],
        ["5", "Editable", "Subject", "Faculty", "Room"],
        ["6", "Editable", "Subject", "Faculty", "Room"],
        ["7", "Editable", "Subject", "Faculty", "Room"],
        ["8", "Editable", "Subject", "Faculty", "Room"]
    ],

    Thursday: [
        ["1", "Editable", "Subject", "Faculty", "Room"],
        ["2", "Editable", "Subject", "Faculty", "Room"],
        ["3", "Editable", "Subject", "Faculty", "Room"],
        ["4", "Editable", "Subject", "Faculty", "Room"],
        ["5", "Editable", "Subject", "Faculty", "Room"],
        ["6", "Editable", "Subject", "Faculty", "Room"],
        ["7", "Editable", "Subject", "Faculty", "Room"],
        ["8", "Editable", "Subject", "Faculty", "Room"]
    ],

    Friday: [
        ["1", "Editable", "Subject", "Faculty", "Room"],
        ["2", "Editable", "Subject", "Faculty", "Room"],
        ["3", "Editable", "Subject", "Faculty", "Room"],
        ["4", "Editable", "Subject", "Faculty", "Room"],
        ["5", "Editable", "Subject", "Faculty", "Room"],
        ["6", "Editable", "Subject", "Faculty", "Room"],
        ["7", "Editable", "Subject", "Faculty", "Room"],
        ["8", "Editable", "Subject", "Faculty", "Room"]
    ]
};

const daySelect = document.getElementById("daySelect");
const timetableBody = document.getElementById("timetableBody");

function displayTimetable(day) {
    timetableBody.innerHTML = "";

    timetable[day].forEach(period => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${period[0]}</td>
            <td>${period[1]}</td>
            <td>${period[2]}</td>
            <td>${period[3]}</td>
            <td>${period[4]}</td>
        `;

        timetableBody.appendChild(row);
    });
}

daySelect.addEventListener("change", function () {
    displayTimetable(this.value);
});

displayTimetable("Monday");