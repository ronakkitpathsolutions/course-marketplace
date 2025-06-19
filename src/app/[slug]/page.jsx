import { api } from "@/api";
import Landing from "@/components/layout/landing";
import { apiAsyncHandler } from "@/helpers";
import VideoPlayer from "@/shared/players/video";
import { notFound } from "next/navigation";

const getData = async (params) => {
  const res = await apiAsyncHandler(
    async () =>
      await api.landing.get({ params }),
    () => notFound()
  );
  return res?.data;
};

export default async function SlugPage({ params }) {
  const { slug } = await params;
  
  const response = await getData({
    final_url: slug,
    domain: process.env.NEXT_PUBLIC_DOMAIN,
  });

  return (
    <div>
      <h1>Course Detail Page</h1>
      <p>Slug: {slug}</p>
      <Landing {...response?.data} />
    </div>
  );
}
