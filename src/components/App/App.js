import Costumes from '../Costumes/Costumes';
import Date from '../Date/Date';
import Header from '../Header/Header';
import Invitation from '../Invitation/Invitation';
import Place from '../Place/Place';
import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Date />
      <Place />
      <Costumes />
      <Invitation />
    </div>
  );
}

export default App;
