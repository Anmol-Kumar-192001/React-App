import './toDoCard.css'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToDoItem, removeFromToDo } from '../redux/action'

// import {faPlusLarge } from '@fortawesome/free-solid-svg-icons/faPlusLarge'



const ToDoCard = () => {

  const [value, setValue] = useState('')
  // const [items, setItems] = useState([])

  const dispatch = useDispatch()
  const todoItems = useSelector((state) => state.reducer)

  // console.log("redux items are", todoItems);
  // console.log("state items are",items);

  // useEffect(()=>{
  //   // setItems(todoItems)
  // },todoItems)

  const handleChange = (e) => {
    // console.log("value is", e.target.value);
    setValue(e.target.value)
  }

  const addItems = (item) => {
    // setItems([...items, value])
    dispatch(addToDoItem(item))
    setValue('')
    // console.log("items are", items)
  }

  const removeItems=(item)=>{
    dispatch(removeFromToDo(item))
  }

  return (
    <div className='todo-main-card'>
      <div className="todo-card">
        <div className='todo-header'>
          <p className='todo-header-text'>ToDo List</p>
        </div>
        <div className='add-item-div'>
          <form className='todo-form-box'>
            <input type='text' placeholder='Add a Item' className='todo-input-box'
              value={value} onChange={handleChange}
            />
          </form>
          <button className='add-icon' onClick={()=>addItems(value)}>+
          </button>
        </div>
        {
          todoItems?.map((element, idx) => {
            return (
              <div className='item-box' key={String(idx)}>
                <p className='item-name'>{element}</p>
                <button className='delete-btn' onClick={()=>removeItems(element)}>
                  <FontAwesomeIcon icon={faDeleteLeft} style={{ color: 'red', fontSize: 30 }} />
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ToDoCard