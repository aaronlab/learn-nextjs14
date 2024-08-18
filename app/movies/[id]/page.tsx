export const metadata = {
  title: "Movie",
};

export default function MovieDetail(props: {
  params: {
    id: string;
  };
  searchParams: {
    region: string;
    page: string;
  };
}) {
  return <h1>Movie {props.params.id}</h1>;
}
