const monthNameE1 = document.getElementById("month-name");
const dayNameE1 = document.getElementById("day-name");
const daynumE1 = document.getElementById("day-number");
const yearE1 = document.getElementById("year");

const date = new Date();

monthNameE1.innerText = date.toLocaleString("id", {
    month: "long"
});

dayNameE1.innerText = date.toLocaleString("id", {
    weekday: "long"
});

daynumE1.innerText = date.getDate();

yearE1.innerText = date.getFullYear();
