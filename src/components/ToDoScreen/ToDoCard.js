import './toDoCard.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft,faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToDoItem, markAsDone, removeFromToDo } from '../redux/action'

const ToDoCard = () => {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const todoItems = useSelector((state) => state.reducer)

  console.log('redux data is',todoItems);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const addItems = (item) => {
    if(item.length>0){
      dispatch(addToDoItem({item,tick:false}))
      setValue('')
    }
  }

  const removeItems=(item)=>{
    dispatch(removeFromToDo(item))
  }

  const doneItems=(item, index)=>{
    dispatch(markAsDone({item,tick:true, index}))
  }

  return (
    <div className='todo-main-card'>
      <div className="todo-card">
        <div className='todo-header'>
          <p className='todo-header-text'>ToDo List</p>
        </div>
        <div className='add-item-div'>
          <form className='todo-form-box'>
            <input type='text' placeholder='Add an Item' className='todo-input-box'
              value={value} onChange={handleChange}
            />
          </form>
          <button className='add-icon' onClick={()=>addItems(value)}>+
          </button>
        </div>
        <div className='item-div'>
          <div className='item-child-div'>
          {
          todoItems?.map((element, idx) => {
            return (
              <div className='item-box' key={String(idx)}>
               {element.tick&& <div className='h-line'></div>}
                <p className='item-name'>{element.item}</p>
                <div className='icon-div'>
                <button className='check-btn' onClick={()=>doneItems(element.item, idx)}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', fontSize: 30 }} />
                </button>
                <button className='delete-btn' onClick={()=>removeItems(element.item)}>
                  <FontAwesomeIcon icon={faDeleteLeft} style={{ color: 'red', fontSize: 30 }} />
                </button>
                </div>
              </div>
            )
          })
        }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoCard