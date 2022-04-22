import { Suspense } from 'react';
import { suspenseProfileData } from '../../helpers/fetch-data';
import { PostT, UserT } from '../../helpers/types';

const resource = suspenseProfileData<UserT, PostT[]>();

function ProfileTimeline() {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts!.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function ProfileDetails() {
  const user = resource.user.read();

  return <h1 style={{ color: 'purple' }}>Name : {user!.name}</h1>;
}

function Profile() {
  return (
    <Suspense fallback={<h2>Loading profile...</h2>}>
      <ProfileDetails />
      <Suspense fallback={<h2>Loading posts...</h2>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}

export default Profile;
