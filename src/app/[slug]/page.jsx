export default async function SlugPage({ params }) {
    const { slug } = await params;
  return (
    <div>
      <h1>Course Detail Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
