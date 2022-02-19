const posts = [{title: "post1", body: "this is post one"},
                {title: "post2", body: "this is post two"}];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `${post.title}`;
        });
        console.log(output);
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}



createPost({title: "post3", body: "this is post three"}, getPosts);