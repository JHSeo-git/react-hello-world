export function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export async function fetchPosts<T>(delay = 0): Promise<T> {
  const [res] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => posts.slice(0, 10)),
    sleep(delay),
  ]);

  return res;
}

export async function fetchUser<T>(delay = 0): Promise<T> {
  const [res] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
    sleep(delay),
  ]);

  return res;
}

export function fetchProfileData<T, U>() {
  return Promise.all([fetchUser<T>(1000), fetchPosts<U>(2000)]).then(([user, posts]) => {
    return { user, posts };
  });
}

export function suspenseProfileData<T, U>() {
  const userPromise = fetchUser<T>(1000);
  const postsPromise = fetchPosts<U>(2000);
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}
