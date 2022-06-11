import Row from '../UI/row'
import { useDispatch } from 'react-redux';
import { todoAction } from '../../store/todo\'s';
import { useSelector } from 'react-redux';
const TableOfTodo = (props) => {
        const dispatch = useDispatch();
        let todosArr = useSelector(state => state.todoArr.todoArr)

        const deleteTodo = (id) => {
            dispatch(todoAction.removeTodo(id));
        }

        let tableHeader = < Row number = 'No'
        title = 'Title'
        description = 'Description'
        dueDate = 'DueDate' / > ;
        let resultArr = [];
        if (todosArr.length > 4) {

            resultArr = todosArr.map((todo, index) => < Row key = { todo.id }
                number = { index + 1 }

                title = { todo.title }
                description = { todo.description }
                dueDate = { todo.dueDate }
                deleteBtn = 'True'
                onClick = {
                    () => deleteTodo(todo.id)
                }
                / >  )

            }
            if (4 >= todosArr.length) {
                let emptyRow = 4 - todosArr.length;
                let todosArray = todosArr.map((todo, index) => < Row key = { todo.id }
                        number = { index + 1 }
                        title = { todo.title }
                        description = { todo.description }
                        dueDate = { todo.dueDate }
                        deleteBtn = 'True'
                        onClick = {
                            () => deleteTodo(todo.id)
                        }
                        / > )
                        let emptyArr = [];
                        for (let i = 0; i < emptyRow; i++) {
                            emptyArr = [...emptyArr, < Row key = { Math.floor(Math.random() * 10000) }
                                /> ]
                            }
                            resultArr = [...todosArray, ...emptyArr]
                        }

                        return ( < > { tableHeader } { resultArr } < />)
                        }

                        export default TableOfTodo;