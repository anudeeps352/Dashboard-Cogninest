'use client';

import Search from '@/components/search';

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col py-9 justify-start items-center">
      <Search></Search>
    </main>
  );
}
