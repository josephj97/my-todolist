import axios from "axios";
var endpoint = "http://localhost:3000/api/v1/"

export const getAllTodos = (onSuccess) => {
    axios.get(`${endpoint}todo`).then((response) => {
        onSuccess(response)
    })
}

export const deleteTodo = (onSuccess, id) => {
    axios.delete(`${endpoint}todo/${id}`).then(() => {
        onSuccess(id)
    })
}

export const updateTodo = (onSuccess, updatedTodo) => {
    axios.put(`${endpoint}todo/${updatedTodo._id}`, {
        title: updatedTodo.title,
        description: updatedTodo.description
    }).then((response) => {
        onSuccess(response)
    })
}

export const completeTodo = (onSuccess, event, id) => {
    const newIsChecked = event.target.checked
    axios.put(`${endpoint}todo/${id}`, {
        isCompleted: newIsChecked
    }).then((response) => {
        onSuccess(response)
    })
}