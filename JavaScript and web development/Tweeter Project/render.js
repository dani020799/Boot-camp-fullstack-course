const Renderer = function() {
    const generateCommentHTML = function(comment) {
        return `
            <div class="comment" data-id="${comment.id}">
                <span class="comment-text">${comment.text}</span>
                <button class="delete-comment" data-comment-id="${comment.id}">✕</button>
            </div>
        `;
    };

    const generatePostHTML = function(post) {
        let commentsHTML = '';
        post.comments.forEach(comment => {
            commentsHTML += generateCommentHTML(comment);
        });

        return `
            <div class="post" data-id="${post.id}">
                <div class="post-header">
                    <div class="post-text">${post.text}</div>
                    <button class="delete-post" data-id="${post.id}">Delete Post</button>
                </div>
                <div class="comments">
                    ${commentsHTML}
                </div>
                <div class="comment-input-section">
                    <input type="text" placeholder="Got something to say?" class="comment-input">
                    <button class="comment-button">Comment</button>
                </div>
            </div>
        `;
    };

    return {
        renderPosts: function(posts) {
            const $postsContainer = $('#posts');
            $postsContainer.empty();

            if (posts.length === 0) {
                $postsContainer.html('<p class="no-posts">No posts yet. Be the first to twit!</p>');
                return;
            }

            posts.forEach(post => {
                $postsContainer.append(generatePostHTML(post));
            });
        }
    };
};
