import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from "../template/pageHeader";
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

    this.refresh();
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(() => this.refresh(this.state.description))
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt ${search}`)
      .then(resp => this.setState({ ...this.state, description, list: resp.data }));
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then(() => this.refresh())
  };

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(() => this.refresh(this.state.description));
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(() => this.refresh(this.state.description));
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm 
          handleAdd={this.handleAdd}
          handleClear={this.handleClear}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          description={this.state.description}
        />
        <TodoList 
          list={this.state.list} 
          handleRemove={this.handleRemove} 
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    )
  }
}