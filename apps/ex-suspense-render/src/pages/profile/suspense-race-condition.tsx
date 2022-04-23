import { Suspense, useState } from 'react';
import { getNextId } from '../../helpers/common';
import { suspenseProfileData } from '../../helpers/fetch-data';
import type { PostT, UserT } from '../../helpers/types';

const initialResource = suspenseProfileData<UserT, PostT>(1);

type Props = {
  resource: typeof initialResource;
};

function ProfileTimeline({ resource }: Props) {
  const post = resource.posts.read();
  return (
    <>
      <h3>{post!.title}</h3>
      <p>{post!.body}</p>
    </>
  );
}

function ProfileDetails({ resource }: Props) {
  const user = resource.user.read();

  return <h1 style={{ color: 'purple' }}>Name : {user!.name}</h1>;
}

function ProfileComponent({ resource }: Props) {
  return (
    <Suspense fallback={<h2>Loading profile...</h2>}>
      <ProfileDetails resource={resource} />
      <Suspense fallback={<h2>Loading posts...</h2>}>
        <ProfileTimeline resource={resource} />
      </Suspense>
    </Suspense>
  );
}

function Profile() {
  const [resource, setResource] = useState(initialResource);

  return (
    <>
      <button
        onClick={() => {
          const nextUserId = getNextId(resource.userId);
          setResource(suspenseProfileData(nextUserId));
        }}
      >
        Next
      </button>
      <ProfileComponent resource={resource} />
    </>
  );
}

export default Profile;
