export default function Home() {
  return (
    <div className="min-h-screen justify-center items-center flex font-[family-name:var(--font-geist-sans)] bg-slate-300">
      <main className="flex flex-col gap-8 justify-center items-center max-w-screen-lg">
        <h1 className="text-center sm:text-sm md:text-5xl text-red-900 font-bold">
          Welcome to Sunnyland4kids!
        </h1>
        <p className="text-center max-w-[50rem] text-blue-600 sm:text-sm md:text-2xl">
          We're excited to have you here! Stay tuned as we prepare to open soon
          for a world of fun and learning!
        </p>
      </main>
    </div>
  );
}
