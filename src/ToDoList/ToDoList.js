import React, {Component} from 'react';
import {connect} from 'react-redux';
import ToDoItem from './ToDoItem';
import {
  toggleTodo,
  deleteTodo,
  saveTodo,
  setFilter,
  getVisibleTodos as getTodos,
  getFilterValue,
} from './store';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.addRef = React.createRef();
    this.addClick = this.addClick.bind(this);

  }

  addClick() {
    this.props.saveTodo({
      id: new Date * Math.random(),
      name: this.addRef.current.value,
      completed: false,
      deleted: false
    })
  }

  render() {
    const {todos, onTodoClick, onDeleteClick, filter, onFilterChange} = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <select className="form-control" value={filter} onChange={onFilterChange}>
              <option value="all">all</option>
              <option value="completed">completed</option>
              <option value="not-completed">not completed</option>
              <option value="deleted">deleted</option>
            </select>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {todos.map && todos.map(
                todo => (
                  <ToDoItem
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                    onClickDelete={() => onDeleteClick(todo.id)}
                  />
                )
              )}
            </ul>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="New ToDo"
                ref={this.addRef}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.addClick}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const state2Props = state => ({
  todos: getTodos(state),
  filter: getFilterValue(state),
});

const handlers = {
  saveTodo,
  onTodoClick: id => toggleTodo(id),
  onDeleteClick: id => deleteTodo(id),
  onFilterChange: ({target}) => setFilter(target.value),
}

export default connect(state2Props, handlers)(ToDoList);