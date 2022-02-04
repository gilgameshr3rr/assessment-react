import React from "react";
import {Container} from "./components/Container";
import {IdCard} from "./components/IdCard";
import "./styles.css";


function App() {
  return (
    <div className="App">
        <Container>
            <IdCard
            fullName=' John Doe'
            gender=' male'
            birthday=" 1992-07-14"
            picture="https://randomuser.me/api/portraits/men/44.jpg"
            />
            <IdCard
            fullName=' Obrien Delores'
            gender=' female'
            birthday=" 1988-05-11"
            picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
        </Container>       
    </div>
  );
}

export default App;