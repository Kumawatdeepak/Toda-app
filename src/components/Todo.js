import React, {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addTodo, deleteTodo,removeTodo} from '../actions/index';
import './Todo.css'
const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.list)
    return (
        <>
          <div className="main-div">
            <div className="child-div">
                <figure>
                <figcaption>Add Your List Here ✌  </figcaption>
                </figure>
                <div className="addItems">
                <input type="text" placeholder="✍ Add Items..." value={inputData} onChange={(e)=> setInputData(e.target.value) } /> 
                <i onClick={()=>dispatch(addTodo(inputData),setInputData('')) }>➕</i>
                </div>
            </div>
            <div className="show_items">
                {
                    list.map((elem)=>{
                        return(
                            <div className="each_item" key={elem.id}>
                            <h3 className="left_list">{elem.data}</h3><span onClick={()=>dispatch(deleteTodo(elem.id)) }> ❌ </span>
                        </div>

                        )
                    })
                }
            </div>
            </div> 
        </>
    )
}

export default Todo
