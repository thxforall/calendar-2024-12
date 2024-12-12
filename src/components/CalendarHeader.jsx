import './CalendarHeader.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function CalendarHeader() {
  return days.map((day) => {
    return (
      <li
        className={`calendar-header ${day === 'Sun' ? 'sunday' : ''} ${
          day === 'Sat' ? 'saturday' : ''
        }`}
        key={day}
      >
        {day}
      </li>
    );
  });
}

export default CalendarHeader;
