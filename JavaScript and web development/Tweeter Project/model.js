const Tweeter = function() {
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    let postIdCounter = 2;
    let commentIdCounter = 6;

    return {
        getPosts: function() {
            return posts;
        },

        addPost: function(text) {
            postIdCounter++;
            const newPost = {
                text: text,
                id: "p" + postIdCounter,
                comments: []
            };
            posts.unshift(newPost);
            return newPost;
        },

        removePost: function(postID) {
            posts = posts.filter(post => post.id !== postID);
        },

        addComment: function(postID, text) {
            commentIdCounter++;
            const comment = {
                id: "c" + commentIdCounter,
                text: text
            };
            const post = posts.find(p => p.id === postID);
            if (post) {
                post.comments.push(comment);
            }
            return comment;
        },

        removeComment: function(postID, commentID) {
            const post = posts.find(p => p.id === postID);
            if (post) {
                post.comments = post.comments.filter(comment => comment.id !== commentID);
            }
        }
    };
};
