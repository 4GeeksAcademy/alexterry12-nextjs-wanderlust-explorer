interface ExperienceDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { id } = await params;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Experience Detail</h1>
      <p className="text-lg">Showing experience: {id}</p>
    </main>
  );
}