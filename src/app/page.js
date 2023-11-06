import Image from "next/image";
import Title from "./title";
import SelectionBox from "./selection";
import SWARACalculator from "./swara";
import Results from "./results";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Title />

      <div className="flex col gap-5 justify-between">
        <SelectionBox />
        <Results />
      </div>
      {/* <SWARACalculator /> */}
    </main>
  );
}
