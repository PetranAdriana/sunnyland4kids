export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center text-center">
        <h1
          style={{
            fontSize: "4em",
            fontWeight: "bold",
            color: "#ff6347",
            textShadow: "2px 2px #ff0000",
          }}
        >
          Welcome to Sunnyland4kidsKids!
        </h1>
        <p style={{ fontSize: "2em", color: "#4682b4" }}>
          We're excited to have you here! Stay tuned as we prepare to open soon
          for a world of fun and learning!
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
