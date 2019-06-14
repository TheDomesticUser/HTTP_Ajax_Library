// const http = new easyHTTP;

// // Get Posts
// // const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(posts);
// //     }
// // });

// // Get Single Post
// // const posts = http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(post);
// //     }
// // });

// // Create Data
// const data = {
//     title: "Custom Post",
//     body: "This is a custom post"
// };

// // Create a POST request
// // http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(post);
// //     }
// // });

// // Update Post
// // http.put('https://jsonplaceholder.typicode.com/posts/3', data, function(err, post){
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(post);
// //     }
// // });

// // Delete Post
// // http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(response);
// //     }
// // });

const http = new EasyHTTP;

// // Get Users
// const users = http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// // User Data
// const data = {
//     name: 'John Doe',
//     username: 'johndoe',
//     email: 'jdoe@gmail.com'
// }

// // Create User
// const users = http.post('http://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// // Update User
// const users = http.put('http://jsonplaceholder.typicode.com/users/10', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// // Delete User
// const users = http.delete('http://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

const data = {
    name: 'John Doe',
    username: 'Delta',
    email: 'delta5232@yahoo.com'
};

// // Get User
// const users = http.get('https://jsonplaceholder.typicode.com/users')
// .then(users => console.log(users))
// .catch(err => console.log('ERROR: ' + err));

// // Post User
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(user => console.log(user))
// .catch(err => console.log(err));

// // Put User
// http.put('https://jsonplaceholder.typicode.com/users/3', data)
// .then(user => console.log(user))
// .catch(err => console.log(err));

// // Delete User
// http.delete('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => console.log(response))
// .catch(err => console.log(err));