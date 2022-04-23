import { wrapPromise } from '@custom/utils';

export function fetchPost<T>(delay = 0, postId: number): Promise<T> {
  console.log('[fetch] fetchPost: ', postId, '...');
  return new Promise(resolve => {
    setTimeout(() => {
      const data = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res =>
        res.json()
      );
      console.log('[fetched] fetchPost: ', postId);
      resolve(data);
    }, delay);
  });
}

export function fetchUser<T>(delay = 0, userId: number): Promise<T> {
  console.log('[fetch] fetchUser: ', userId, '...');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('[fetched] fetchUser: ', userId);
      const data = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res =>
        res.json()
      );
      resolve(data);
    }, delay);
  });
}

export function suspenseProfileData<T, U>(userId: number) {
  const userPromise = fetchUser<T>(1000 * Math.random(), userId);
  const postsPromise = fetchPost<U>(2000 * Math.random(), userId);
  return {
    userId,
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
}

export type SuspenseFetch = ReturnType<typeof suspenseProfileData>;
