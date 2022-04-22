import { useEffect, useState } from 'react';
import { fetchProfileData } from '../../helpers/fetch-data';
import { PostT, UserT } from '../../helpers/types';

// 최대한 빨리 fetch 하기
const fetchProfile = fetchProfileData<UserT, PostT[]>();

type ProfileTimelineProps = {
  posts: PostT[] | null;
};

function ProfileTimeline({ posts }: ProfileTimelineProps) {
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
  const [posts, setPosts] = useState<PostT[] | null>(null);

  useEffect(() => {
    fetchProfile.then(data => {
      setUser(data.user);
      setPosts(data.posts);
    });
  }, []);

  if (user === null) {
    return <h2>Loading profile...</h2>;
  }

  return (
    <>
      <h1 style={{ color: 'purple' }}>Name : {user.name}</h1>
      <ProfileTimeline posts={posts} />
    </>
  );
}

export default Profile;
