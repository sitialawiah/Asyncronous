const posts = [
  { title: 'post 1', body:'satu'},
  { title: 'post 2', body:'dua'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
      posts.push(post);
      callback();
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
