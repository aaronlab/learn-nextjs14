import { API_URL } from "../(home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const movie = await getMovie(id);
  return <div>{JSON.stringify(movie)}</div>;
}
