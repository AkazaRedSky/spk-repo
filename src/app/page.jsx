import Title from "./title";
import MainPage from "./mainpage";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Title />

      <div className="flex col gap-5 justify-between">
<MainPage />
      </div>
    </main>
  );
}
