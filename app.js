const timetable = {
    Monday: [
        ["1", "8:00-8:50", "Centre Activity", "Respective Staff"],
        ["2", "8:50-9:40", "Centre Activity", "Respective Staff"],
        ["3", "9:40-10:30", "Mentor", "Mrs.Saranya"],
        ["4", "10:30-11:20", "Mentor", "Mrs.Saranya"],
        ["5", "12:00-12:50", "Environmental Science", "Tamilarasan"],
        ["6", "12:50-1:40", "Discrete Mathematics", "Sathishkumar"],
        ["7", "2:00-2:50", "DPCO", "Subashini"],
        ["8", "2:50-3:40", "AI", "Selvakumari"]
    ],

    Tuesday: [
        ["1", "8:00-8:50", "NSS/YRC/YUVA", "Pooja/Juiln Leeya/Aakash"],
        ["2", "8:50-9:40", "NSS/YRC/YUVA", "Pooja/Juiln Leeya/Aakash"],
        ["3", "9:40-10:30", "Aptitude/Placement", "Placement cell"],
        ["4", "10:30-11:20", "Aptitude/Placement", "Placement cell"],
        ["5", "12:00-12:50", "Data Structure", "Banupriya"],
        ["6", "12:50-1:40", "OOPs", "Kavitha"],
        ["7", "2:00-2:50", "Environmental Science", "Tamilarasan"],
        ["8", "2:50-3:40", "Discrete Mathematics", "Sathishkumar"]
    ],

    Wednesday: [
        ["1", "8:00-8:50", "DPCO Lab", "Subashini/Malini"],
        ["2", "8:50-9:40", "DPCO Lab", "Subashini/Malini"],
        ["3", "9:40-10:30", "Mini Project", "Avudai Selvi"],
        ["4", "10:30-11:20", "Mini Project", "Avudai Selvi"],
        ["5", "12:00-12:50", "DPCO", "Subashini"],
        ["6", "12:50-1:40", "AI", "Selvakumari"],
        ["7", "2:00-2:50", "Data Structure", "Banupriya"],
        ["8", "2:50-3:40", "OOPs", "Kavitha"]
    ],

    Thursday: [
        ["1", "8:00-8:50", "L13", "Faculty"],
        ["2", "8:50-9:40", "L14", "Faculty"],
        ["3", "9:40-10:30", "OOPs Lab", "Kavitha/Nisha"],
        ["4", "10:30-11:20", "OOPs Lab", "Kavitha/Nisha"],
        ["5", "12:00-12:50", "Discrete Mathematics", "Sathishkumar"],
        ["6", "12:50-1:40", "DPCO", "Subashini"],
        ["7", "2:00-2:50", "AI", "Selvakumari"],
        ["8", "2:50-3:40", "Data Structure", "Banupriya"]
    ],

    Friday: [
        ["1", "8:00-8:50", "Data Structure Lab", "Banupriya/Gajalakshmi"],
        ["2", "8:50-9:40", "Data Structure Lab", "Banupriya/Gajalakshmi"],
        ["3", "9:40-10:30", "Mini Project", "Avudai Selvi"],
        ["4", "10:30-11:20", "Mini Project", "Avudai Selvi"],
        ["5", "12:00-12:50", "OOPs", "Kavitha"],
        ["6", "12:50-1:40", "Environmental Science", "Tamilarasan"],
        ["7", "2:00-2:50", "Discrete Mathematics", "Sathishkumar"],
        ["8", "2:50-3:40", "DPCO", "Subashini"]
    ]
};

const daySelect = document.getElementById("daySelect");
const timetableBody = document.getElementById("timetableBody");

function displayTimetable(day) {
    timetableBody.innerHTML = "";

    timetable[day].forEach(function(period) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${period[0]}</td>
            <td>${period[1]}</td>
            <td>${period[2]}</td>
            <td>${period[3]}</td>
        `;

        timetableBody.appendChild(row);

        // Break after periods 2, 4 and 6
        if (period[0] == "2" || period[0] == "4" || period[0] == "6") {
            const breakRow = document.createElement("tr");

            breakRow.innerHTML = `
                <td colspan="4" class="break-row">☕ BREAK</td>
            `;

            timetableBody.appendChild(breakRow);
        }
    });
}

daySelect.addEventListener("change", function() {
    displayTimetable(this.value);
});

displayTimetable("Monday");
   
   
