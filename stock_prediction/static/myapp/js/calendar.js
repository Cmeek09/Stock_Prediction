// Get elements
const calendarEl = document.getElementById('calendar');
const dateEl = document.getElementById('date');
const noteEl = document.getElementById('note');
const addNoteBtn = document.getElementById('add-note');
const days = document.querySelectorAll('td[id^="day-"]');

const today = new Date();


// Update the day cells with the current date
const currentDate = today.getDate();
for (let i = 0; i < days.length; i++) {
  const dayNum = i + 1;
  if (dayNum === currentDate) {
    days[i].classList.add('today');
  } else {
    days[i].classList.remove('today');
  }
  days[i].textContent = (dayNum <= daysInMonth(today)) ? dayNum : '';
}

// Helper function to get the number of days in a month
function daysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

// Add event listener to add note button
addNoteBtn.addEventListener('click', () => {
// Get selected date and note
const selectedDate = dateEl.value;
const note = noteEl.value;

// Find corresponding table cell
const cell = calendarEl.querySelector(`td[data-date="${selectedDate}"]`);

// Add note to cell
cell.innerHTML += `<p>${note}</p>`;


// Clear form
dateEl.value = '';
noteEl.value = '';
});

// Initialize calendar
const month = 0; // January
const year = 2023;
const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);
const startDay = firstDay.getDay();
const endDay = lastDay.getDate();

// Set month and year in calendar header
const monthYearEl = calendarEl.querySelector('#month-year');
monthYearEl.innerHTML = today.toLocaleString('default', { month: 'long', year: 'numeric' });

// Populate calendar
const calendarBodyEl = calendarEl.querySelector('tbody');
let date = 1;
for (let i = 0; i < 6; i++) {
const row = document.createElement('tr');
for (let j = 0; j < 7; j++) {
const cell = document.createElement('td');
if (i === 0 && j < startDay) {
// Empty cell before first day of month
const cellText = document.createTextNode('');
cell.appendChild(cellText);
} else if (date > endDay) {
// Empty cell after last day of month
break;
} else {
// Cell with date
const cellText = document.createTextNode(date);
cell.appendChild(cellText);
cell.dataset.date = `${year}-${month + 1}-${date < 10 ? '0' : ''}${date}`;

  // Add note button
  const addNoteBtn = document.createElement('button');
  addNoteBtn.innerText = 'Add Note';
  addNoteBtn.addEventListener('click', () => {
    // Set date in add note form
    dateEl.value = cell.dataset.date;
  });
  cell.appendChild(addNoteBtn);

  date++;
}
row.appendChild(cell);

}
calendarBodyEl.appendChild(row);
}