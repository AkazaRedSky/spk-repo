import Title from "./title";
import SelectionBox from "./selection";
import Results from "./results";
import SWARACalc from "./swaracalc/swaracalc";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Title />

      <div className="flex col gap-5 justify-between">
        <SelectionBox />
        <SWARACalc />
        <Results />
      </div>
    </main>
  );
}
