import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BookCard from './components/BookCard';
import AddBook from './components/AddBook';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Card from './components/Card';

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* header */}
        <Header></Header>
        <Card></Card>

      </div>
    </Provider>
  );
}

export default App;
