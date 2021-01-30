export function saveTodos(value) {
    localStorage.setItem('todos_key',JSON.stringify(value))
}

export function readTodos() {
    return JSON.parse(localStorage.getItem('todos_key')||'[]');
}