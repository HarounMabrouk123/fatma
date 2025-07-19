// components/TransactionTable.tsx
export default function TransactionTable({ data }: { data: any[] }) {
  if (!data.length) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="w-full max-w-5xl mx-auto overflow-x-auto">
      <div className="rounded-lg shadow-md border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider border-r last:border-r-0"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((row, i) => (
              <tr
                key={i}
                className="hover:bg-blue-50 transition-colors duration-150"
              >
                {headers.map((header) => (
                  <td
                    key={header}
                    className="px-6 py-3 text-gray-800 whitespace-nowrap border-r last:border-r-0"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
