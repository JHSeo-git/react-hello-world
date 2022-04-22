import { wrapPromise, sleep } from '@custom/utils';

export function fetchPosts<T>(delay = 0): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => posts.slice(0, 10));
      resolve(data);
    }, delay);
  });
}

export function fetchUser<T>(delay = 0): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
      resolve(data);
    }, delay);
  });
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
