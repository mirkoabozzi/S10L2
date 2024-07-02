import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";
import fantasyBooks from "./data/fantasy.json";

function App() {
  return (
    <>
      <div>
        <MyNav />
        <BookList books={fantasyBooks} />
      </div>
    </>
  );
}

export default App;
