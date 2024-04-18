const fetch = require('node-fetch');

const getTodosByUserId = async (userId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const todos = await response.json();
        return todos;
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
};
const userId = 1;
getTodosByUserId(userId)
    .then(todos => {
        console.log(`Todos for User ID ${userId}:`);
        todos.forEach(todo => {
            console.log(todo);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
