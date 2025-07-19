// components/KpiGrid.tsx
export default function KpiGrid() {
  const stats = [
    { label: "Transactions Analyzed", value: "12,547" },
    { label: "% Suspected Fraud", value: "2,3%" },
    { label: "Cases for Review", value: "289" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/20 border-4 border-black text-white p-4 rounded-lg shadow-xl text-center backdrop-blur-sm"
        >
          <div className="text-sm text-white/80 font-medium">{stat.label}</div>
          <div className="text-3xl font-bold mt-1">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}
