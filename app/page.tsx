'use client';

import WhoisLookup from "./components/WhoIsLookup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <WhoisLookup />
    </main>
  );
}
