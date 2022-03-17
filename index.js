document.getElementById("textBox").addEventListener("keyup", function (e) {
    if (!e) { var e = window.event; }
    e.preventDefault(); // sometimes useful

    // Enter is pressed
    if (e.key == "Enter") { newTask() }
}, false);

var tasks = document.getElementById("tasks");
function newTask() {
    var row = tasks.insertRow(0);
    var tasktext = row.insertCell(0);
    var removeBtn = row.insertCell(1);

    tasktext.innerHTML = document.getElementById("textBox").value;
    tasktext.className = "unchecked_task";

    removeBtn.innerHTML = "&#10006";
    removeBtn.className = "close";

    tasktext.addEventListener("click", function () {
        if (this.className == "unchecked_task") {
            this.className = "checked_task";
        }
        else if (this.className == "checked_task") {
            this.className = "unchecked_task";
        }
    });
    removeBtn.addEventListener("click", function () {
        var row = this.parentElement;
        row.style.display = "none";
    });
    document.getElementById("textBox").value = "";
}