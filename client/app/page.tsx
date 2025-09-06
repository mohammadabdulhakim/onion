import Image from "next/image";

export default function Home() {
  return (
      <main className="text-2xl text-primary-500">
        <Image src="/assets/logo.png" alt="Logo" width={70} height={70} />
      </main>
  );
}
