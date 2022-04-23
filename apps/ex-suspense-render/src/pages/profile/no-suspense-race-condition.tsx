import { useEffect, useState } from 'react';
import { fetchPost, fetchUser } from '../../helpers/fetch-data';
import { getNextId } from '../../helpers/common';
import { PostT, UserT } from '../../helpers/types';

type Props = {
  id: number;
};

function ProfileTimeline({ id }: Props) {
  const [post, setPost] = useState<PostT | null>(null);

  useEffect(() => {
    fetchPost<PostT>(2000 * Math.random(), id).then(p => setPost(p));
  }, [id]);

  if (post === null) {
    return <h2>Loading post...</h2>;
  }
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
}

function ProfileComponent({ id }: Props) {
  const [user, setUser] = useState<UserT | null>(null);

  useEffect(() => {
    fetchUser<UserT>(1000 * Math.random(), id).then(u => setUser(u));
  }, [id]);

  if (user === null) {
    return <p>Loading profile...</p>;
  }

  return (
    <>
      <h1 style={{ color: 'purple' }}>Name : {user.name}</h1>
      <ProfileTimeline id={id} />
    </>
  );
}

function Profile() {
  const [id, setId] = useState(1);

  return (
    <>
      <button onClick={() => setId(getNextId(id))}>Next</button>
      <ProfileComponent id={id} />
    </>
  );
}

export default Profile;
