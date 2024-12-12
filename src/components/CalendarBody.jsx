import './CalendarBody.css';
import data from '../data.json';
import { useState } from 'react';

function CalendarBody() {
  const today = new Date().getDate();
  const [completedTodos, setCompletedTodos] = useState(new Set());

  const handleTodoClick = (dayIndex, todoIndex) => {
    const todoKey = `${dayIndex}-${todoIndex}`;
    setCompletedTodos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(todoKey)) {
        newSet.delete(todoKey);
      } else {
        newSet.add(todoKey);
      }
      return newSet;
    });
  };

  return (
    <div className="calendar-container">
      {data.map((day, dayIndex) => (
        <li key={dayIndex} className="calendar-body">
          <div
            className={`calendar-body-header ${
              day.date % 7 === 0 ? 'sunday' : ''
            } ${day.date % 7 === 6 ? 'saturday' : ''} ${
              day.date === 25 ? 'sunday' : ''
            } ${day.date === today ? 'today' : ''}
            ${day.date < today ? 'past' : ''}
            `}
          >
            {day.date}
          </div>
          <div
            className={`calendar-body-content ${
              day.date < today ? 'past' : ''
            }`}
          >
            <div className="todo-list">
              {day.todos?.map((todo, todoIndex) => (
                <li
                  key={todoIndex}
                  onClick={() => handleTodoClick(dayIndex, todoIndex)}
                  className={completedTodos.has(`${dayIndex}-${todoIndex}`) ? 'completed' : ''}
                >
                  {todo}
                </li>
              ))}
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default CalendarBody;
