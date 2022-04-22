import { useEffect, useState } from 'react';
import { fetchPosts, fetchUser } from '../../helpers/fetch-data';
import { PostT, UserT } from '../../helpers/types';

function ProfileTimeline() {
  const [posts, setPosts] = useState<PostT[] | null>(null);

  useEffect(() => {
    fetchPosts<PostT[]>(2000).then(p => setPosts(p));
  }, []);

  if (posts === null) {
    return <h2>Loading posts...</h2>;
  }
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function Profile() {
  const [user, setUser] = useState<UserT | null>(null);

  useEffect(() => {
    fetchUser<UserT>(1000).then(u => setUser(u));
  }, []);

  if (user === null) {
    return <h2>Loading profile...</h2>;
  }

  return (
    <>
      <h1 style={{ color: 'purple' }}>Name : {user.name}</h1>
      <ProfileTimeline />
    </>
  );
}

export default Profile;
