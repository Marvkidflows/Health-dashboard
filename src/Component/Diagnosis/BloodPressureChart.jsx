import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Oct, 2023", systolic: 120, diastolic: 105 },
  { month: "Nov, 2023", systolic: 118, diastolic: 65 },
  { month: "Dec, 2023", systolic: 160, diastolic: 110 },
  { month: "Jan, 2024", systolic: 115, diastolic: 90 },
  { month: "Feb, 2024", systolic: 150, diastolic: 70 },
  { month: "Mar, 2024", systolic: 158, diastolic: 78 },
];

export default function BloodPressureChart() {
  return (
    <div className="bg-purple-50 rounded-xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">
          Blood Pressure
        </h3>
        <button className="text-sm text-gray-500 flex items-center gap-1">
          Last 6 months
          <span className="text-xs">⌄</span>
        </button>
      </div>

      <div className="flex gap-6">
        {/* Chart */}
        <div className="flex-1 h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} domain={[60, 180]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#EC4899"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div className="w-[160px] space-y-4">
          <div>
            <p className="text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full" />
              Systolic
            </p>
            <p className="text-xl font-semibold">160</p>
            <p className="text-xs text-gray-500">Higher than Average</p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Diastolic
            </p>
            <p className="text-xl font-semibold">78</p>
            <p className="text-xs text-gray-500">Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
}
