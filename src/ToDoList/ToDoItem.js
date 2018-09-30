import React from 'react';

const ToDoItem = ({ id, name, completed, deleted, onClick, onClickDelete }) => (
  <li className="list-group-item">
    <div className="form-check form-check-inline">
      <input
        type="checkbox"
        className="form-check-input"
        id={`checkbox-${id}`}
        onChange={onClick}
        checked={completed}
      />
      <label className="form-check-label" htmlFor={`checkbox-${id}`}>
        {name}
      </label>
      <div className="btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary active">
          <input
            type="checkbox"
            id={`checkbox-${id}`}
            onChange={onClickDelete}
            checked={deleted}
            autoComplete="off"
          />
          {!deleted ? 'Delete' : "Restore"}
        </label>
      </div>
    </div>
  </li>
);

export default ToDoItem;
