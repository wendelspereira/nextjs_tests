const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getServerSideProps = async () => {
  const res = await fetch(`${baseUrl}/api/hello`);
  const repo = await res.json();
  return { props: { repo } };
};

export default function Home({ repo }: any) {
  return (
    <main>
      <p>{repo.name}</p>
    </main>
  );
}
