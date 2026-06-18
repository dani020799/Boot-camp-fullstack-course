async function getUserWithPosts(userId) {
  try {
    
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    if (!userResponse.ok) {
      throw new Error('User not found');
    }
    
    const user = await userResponse.json();
    console.log(`Found user: ${user.name}`);
    
    
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    if (!postsResponse.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const posts = await postsResponse.json();
    console.log(`Found ${posts.length} posts`);
    
    
    return {
      user: user,
      posts: posts
    };
    
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}


getUserWithPosts(1).then(data => {
  if (data) {
    console.log('User with posts:', data);
  }
});


getUserWithPosts(999).then(data => {
  if (data) {
    console.log('User with posts:', data);
  }
});