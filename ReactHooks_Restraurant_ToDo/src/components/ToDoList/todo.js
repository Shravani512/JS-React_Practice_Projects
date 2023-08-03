import React, { useEffect, useState } from 'react'
import "./style.css";


//get data from local storage
const getLocalData = () => {
    const List = localStorage.getItem("mytodolist");
    if (List) return JSON.parse(List);
    else return [];
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    //add Elements
    const addItems = () => {
        if (!inputData) alert("plz enter data")
        else if (inputData && toggleButton) {
            setItems(
                items.map((currEl) => {
                    if (currEl.id === isEditItem) {
                        return { ...currEl, name: inputData }
                    }
                    return currEl
                })
            )
            setInputData("");
            setIsEditItem(null);
            setToggleButton(false)
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }

    //delete elements
    const Deletele = (index) => {
        const updatedItems = items.filter((curr) => {
            return curr.id !== index;
        });
        setItems(updatedItems);
    };

    //Edit items
    const editItems = (index) => {
        const item_todo_edited = items.find((currElem) => {
            return currElem.id !== index;
        })
        setInputData(item_todo_edited);
        setIsEditItem(index);
        setToggleButton(true)
    }

    //use LocalStorage to store data
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here✌️</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder="✍️Add Items" className='"form-control'
                            onChange={(event) => setInputData(event.target.value)} />

                        {toggleButton ? (
                            <i className="far fa-edit add-btn" onClick={addItems}></i>
                        ) : (
                            <i className="fa fa-plus add-btn" onClick={addItems}></i>
                        )}
                        <i className="fa fa-plus add-btn" onClick={addItems}></i>
                    </div>

                    {/* add values  */}

                    <div className='showItems'>
                        {
                            items.map((currele, index) => {
                                return (
                                    <div className='eachItem' key={currele.id}>
                                        <h3>{currele.name}</h3>
                                        <div className='todo-btn'>
                                            <i className="far fa-edit add-btn"></i>
                                            <i className="far fa-trash-alt add-btn" onClick={() => Deletele(currele.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="REMOVE ALL" onClick={() => {
                            return setItems([``])
                        }}>
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Todo;

