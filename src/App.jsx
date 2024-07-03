import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";
import fantasyBooks from "./data/fantasy.json";
import historyBooks from "./data/history.json";
import horrorBooks from "./data/horror.json";
import romanceBooks from "./data/romance.json";
import scifiBooks from "./data/scifi.json";
import { useState } from "react";

function App() {
  const [categorySelected, setCategorySelected] = useState(scifiBooks);

  const selectCategory = (arrayCategory) => {
    switch (arrayCategory) {
      case "fantasyBooks":
        setCategorySelected(fantasyBooks);
        break;
      case "historyBooks":
        setCategorySelected(historyBooks);
        break;
      case "horrorBooks":
        setCategorySelected(horrorBooks);
        break;
      case "romanceBooks":
        setCategorySelected(romanceBooks);
        break;
      case "scifiBooks":
        setCategorySelected(scifiBooks);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <MyNav selectCategory={selectCategory} />
        <BookList books={categorySelected} />
      </div>
    </>
  );
}

export default App;
