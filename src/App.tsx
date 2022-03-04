
import './App.css';
import { CalendarProvider, UiProvider } from './context';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <>  
      <UiProvider>
        <CalendarProvider>
          <AppRouter/>
        </CalendarProvider>
      </UiProvider>
    </>
  );
}

export default App;
