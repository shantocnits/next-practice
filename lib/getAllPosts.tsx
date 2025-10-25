export default async function getAllPosts() {
  const results = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

  return results.json();
};
