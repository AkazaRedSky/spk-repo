export default function SelectionBox() {
  return (
    <div className="items-start">
      <div>
        <h1 className="text-left text-white text-lg">
          Selections
        </h1>
      </div>
      <div>
        <div className="py-3">
          <label className="flex flex-col-reverse relative focus group">
            <input
              className="text-black"
              type="text"
            />
            <span className="text-black absolute text-sm transform -translate-y-3 left-4 transition leading-10 group-focus-within:-translate-y-4 group-focus-within:text-white">
              Number of Criteria
            </span>
          </label>
        </div>
        <div className="py-3">
          <label className="flex flex-col-reverse relative focus group">
            <input
              className="text-black"
              type="text"
            />
            <span className="text-black absolute text-sm transform -translate-y-3 left-4 transition leading-10 group-focus-within:-translate-y-4 group-focus-within:text-white">
              Number of Alternatives
            </span>
          </label>
        </div>
        <div>
          <button
            className="border-white bg-slate-200 text-gray-700"
          >
            Calculate SWARA Scores
          </button>
        </div>
      </div>
    </div>
  );
}
