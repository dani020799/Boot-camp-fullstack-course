const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

$(document).ready(function() {
    $('#twit-button').on('click', function() {
        const $inputField = $('#input');
        const text = $inputField.val().trim();

        if (text === '') {
            alert('Please enter some text before twitting!');
            return;
        }

        tweeter.addPost(text);
        $inputField.val('');
        renderer.renderPosts(tweeter.getPosts());
    });

    $(document).on('click', '.delete-post', function() {
        const $post = $(this).closest('.post');
        const postID = $post.data('id');
        tweeter.removePost(postID);
        renderer.renderPosts(tweeter.getPosts());
    });

    $(document).on('click', '.comment-button', function() {
        const $post = $(this).closest('.post');
        const postID = $post.data('id');
        const $commentInput = $post.find('.comment-input');
        const text = $commentInput.val().trim();

        if (text === '') {
            alert('Please enter a comment!');
            return;
        }

        tweeter.addComment(postID, text);
        $commentInput.val('');
        renderer.renderPosts(tweeter.getPosts());
    });

    $(document).on('click', '.delete-comment', function() {
        const $post = $(this).closest('.post');
        const postID = $post.data('id');
        const commentID = $(this).data('comment-id');
        tweeter.removeComment(postID, commentID);
        renderer.renderPosts(tweeter.getPosts());
    });

    $('#input').on('keypress', function(event) {
        if (event.key === 'Enter' && event.ctrlKey) {
            $('#twit-button').click();
        }
    });

    $(document).on('keypress', '.comment-input', function(event) {
        if (event.key === 'Enter') {
            $(this).closest('.comment-input-section').find('.comment-button').click();
        }
    });
});
