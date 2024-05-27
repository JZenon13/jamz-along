import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img
            src={image.url}
            alt="image"
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="text-sm font-semibold">{image.name}</div>
        </div>
      ))}
    </>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="p-4 text-center text-2xl font-semibold">
          Please Sign In
        </div>
      </SignedOut>
      <div className="flex flex-wrap gap-4">
        <SignedIn>
          <Images />
        </SignedIn>
      </div>
    </main>
  );
}
