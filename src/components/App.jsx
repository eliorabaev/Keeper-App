import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(newNote) {
    setNoteList((prevVal) => {
      return [...prevVal, newNote];
    });
  }

  function deleteNote(id) {
    setNoteList((prevVal) => {
      return prevVal.filter((item, idx) => {
        return idx !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((noteItem, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={noteItem.title}
            content={noteItem.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
