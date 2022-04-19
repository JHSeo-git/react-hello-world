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
