import React, { useState } from "react";
import "./app.css";
import Navbar from "./Components/Navbar/navbar";
import CriaTask from "./Components/CriaTask/criaTask";
import ListaTasks from "./Components/ListaTasks/listaTasks";

var id = 0;
const geraId = () => {
    id++;
    return id;
};

function App() {
    let [listaTasks, setListaTasks] = useState([]);

    const criaTask = (conteudo) => {
        const novaTask = {
            id: geraId(),
            conteudo: conteudo,
        };
        setListaTasks((taskssExistentes) => {
            return [...taskssExistentes, novaTask];
        });
    };

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <CriaTask novaTask={criaTask} />
                <ListaTasks tasks={listaTasks} />
                {console.log(listaTasks)}
            </div>
        </div>
    );
}

export default App;
