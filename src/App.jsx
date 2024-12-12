import './App.css';
import CalendarHeader from './components/CalendarHeader';
import CalendarBody from './components/CalendarBody';

function App() {
  return (
    <div className="app-container">
      <header>December, 2024</header>
      <ul className="calendar-header-container">
        <CalendarHeader />
      </ul>
      <ul className="calendar-body-container">
        <CalendarBody />
      </ul>
    </div>
  );
}

export default App;
