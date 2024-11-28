/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Email } from "./components/Email";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Email />
      <button onClick={() => setIsModalOpen(true)} className="open-button">
        Abrir Modal
      </button>
      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Probando estad"
        >
          <div>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              max="1000"
            />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;

/*  USER EXAMPLE FROM FETCH
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
*/
