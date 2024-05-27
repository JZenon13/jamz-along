import { db } from "~/server/db";
import Link from "next/link";

const mockImages = [
  "https://utfs.io/f/ed1b25bd-be3f-41cc-82b8-2b1c30f8bd0a-iydokt.png",
  "https://utfs.io/f/50020148-6f19-4bd9-bf83-49cf458e6a86-o18h5b.png",
  "https://utfs.io/f/32f65d55-efff-4f58-a48c-652c6aa148a1-an6c2a.png",
  "https://utfs.io/f/0fc215fe-96ed-4192-8760-f4a6603f8b62-zgr9cr.png",
];

const images = mockImages.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <Link key={image.id} href={`/image/${image.id}`} className="w-48">
            <img
              src={image.url}
              alt="image"
              className="h-full w-full rounded-lg object-cover"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
