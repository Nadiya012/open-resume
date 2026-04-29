import Link from "next/link";

export const Hero = () => {
  return (
    <section className="text-center mt-10">
      <h1 className="text-4xl font-bold">
        Create a professional resume easily
      </h1>
      <p className="mt-4 text-lg">
        Free, simple and powerful resume builder
      </p>
      <Link href="/resume-builder" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Create Resume →
      </Link>
    </section>
  );
};
