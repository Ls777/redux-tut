const initState = {
  todos: [
    {id: 1, name:'Create Static UI', isComplete: true},
    {id: 2, name:'Create Initial State', isComplete: false},
    {id: 3, name:'Use state to render UI', isComplete: false}
  ]
}

const TODO_ADD = 'TODO_ADD'


export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos: [ ...state.todos, action.payload]}
    default:
      return state
  }
}