const timetable = {
    Monday: [
        ["1", "Editable", "Subject", "Faculty"],
        ["2", "Editable", "Subject", "Faculty"],
        ["3", "Editable", "Subject", "Faculty"],
        ["4", "Editable", "Subject", "Faculty"],
        ["5", "Editable", "Subject", "Faculty"],
        ["6", "Editable", "Subject", "Faculty"],
        ["7", "Editable", "Subject", "Faculty"],
        ["8", "Editable", "Subject", "Faculty"]
    ],

    Tuesday: [
        ["1", "Editable", "Subject", "Faculty"],
        ["2", "Editable", "Subject", "Faculty"],
        ["3", "Editable", "Subject", "Faculty"],
        ["4", "Editable", "Subject", "Faculty"],
        ["5", "Editable", "Subject", "Faculty"],
        ["6", "Editable", "Subject", "Faculty"],
        ["7", "Editable", "Subject", "Faculty"],
        ["8", "Editable", "Subject", "Faculty"]
    ],

    Wednesday: [
        ["1", "Editable", "Subject", "Faculty"],
        ["2", "Editable", "Subject", "Faculty"],
        ["3", "Editable", "Subject", "Faculty"],
        ["4", "Editable", "Subject", "Faculty"],
        ["5", "Editable", "Subject", "Faculty"],
        ["6", "Editable", "Subject", "Faculty"],
        ["7", "Editable", "Subject", "Faculty"],
        ["8", "Editable", "Subject", "Faculty"]
    ],

    Thursday: [
        ["1", "Editable", "Subject", "Faculty"],
        ["2", "Editable", "Subject", "Faculty"],
        ["3", "Editable", "Subject", "Faculty"],
        ["4", "Editable", "Subject", "Faculty"],
        ["5", "Editable", "Subject", "Faculty"],
        ["6", "Editable", "Subject", "Faculty"],
        ["7", "Editable", "Subject", "Faculty"],
        ["8", "Editable", "Subject", "Faculty"]
    ],

    Friday: [
        ["1", "Editable", "Subject", "Faculty"],
        ["2", "Editable", "Subject", "Faculty"],
        ["3", "Editable", "Subject", "Faculty"],
        ["4", "Editable", "Subject", "Faculty"],
        ["5", "Editable", "Subject", "Faculty"],
        ["6", "Editable", "Subject", "Faculty"],
        ["7", "Editable", "Subject", "Faculty"],
        ["8", "Editable", "Subject", "Faculty"]
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
        `;

        timetableBody.appendChild(row);
    });
}

daySelect.addEventListener("change", function () {
    displayTimetable(this.value);
});

displayTimetable("Monday");
