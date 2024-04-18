const fetch = require('node-fetch');

const getUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    return user;
};

const getUserPosts = async (userId) => {
    const user = await getUser(userId);
    if (!user || Object.keys(user).length === 0) {
        console.log(`User with ID ${userId} not found.`);
        return;
    }

    console.log("Author's Name:", user.name);
    console.log("City:", user.address.city || "City information not available.");
    console.log("Company:", user.company.name || "Company information not available.");

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();

    console.log("User's Posts Titles:");
    posts.forEach(post => {
        console.log(post.title);
    });
};
getUserPosts(1);
