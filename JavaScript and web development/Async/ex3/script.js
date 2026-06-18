async function getDashboard() {
  try {
    
    const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/comments')
    ]);

    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    const comments = await commentsResponse.json();

    
    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;
    const avgPostsPerUser = Math.round(totalPosts / totalUsers);
    const avgCommentsPerPost = Math.round(totalComments / totalPosts);

    
    const userStats = {};
    users.forEach(user => {
      userStats[user.id] = {
        name: user.name,
        postCount: posts.filter(p => p.userId === user.id).length,
        commentCount: comments.filter(c => {
          const postByUser = posts.find(p => p.id === c.postId);
          return postByUser && postByUser.userId === user.id;
        }).length
      };
    });

    
    const topUsers = Object.values(userStats)
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3)
      .map(user => ({
        name: user.name,
        postCount: user.postCount,
        commentCount: user.commentCount
      }));

    
    const recentPosts = posts
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);

    return {
      summary: {
        totalUsers,
        totalPosts,
        totalComments,
        avgPostsPerUser,
        avgCommentsPerPost
      },
      topUsers,
      recentPosts
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error.message);
    return null;
  }
}


getDashboard().then(dashboard => {
  console.log('Dashboard:', dashboard);
});