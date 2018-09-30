import { saveTodo } from './ToDoList';
import { compose } from './redux-utils';
import todos from './todos';

export const initTodos = ({ dispatch }) => todos.map(
  item=> {
    item.id = new Date * Math.random();
    return compose(dispatch, saveTodo)(item);
  }
);