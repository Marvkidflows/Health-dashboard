import BloodPressureChart from "./BloodPressureChart";

import Heart from "../../assets/HeartBPM.svg";
import Respiratory from "../../assets/RespiratoryRate.svg";
import Temperature from "../../assets/Temperature.svg";

const diagnostics = [
  {
    id: 1,
    problem: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    id: 2,
    problem: "Hypertension",
    description: "Persistently high blood pressure",
    status: "Active",
  },
  {
    id: 3,
    problem: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    id: 4,
    problem: "Anemia",
    description: "Low hemoglobin levels",
    status: "Under Treatment",
  },
  {
    id: 5,
    problem: "Migraine",
    description: "Severe headache episodes",
    status: "Active",
  },
];

export default function DiagnosisHistory() {
  return (
    <section className="bg-white border rounded-2xl p-6">

      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">
        Diagnosis History
      </h2>

      {/* Chart (UNCHANGED) */}
      <BloodPressureChart />

      {/* Stats Cards (HEIGHT ADJUSTED ONLY) */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <StatCard
          icon={Respiratory}
          title="Respiratory Rate"
          value="20 bpm"
          status="Normal"
          bg="bg-cyan-50"
        />
        <StatCard
          icon={Temperature}
          title="Temperature"
          value="98.6°F"
          status="Normal"
          bg="bg-red-50"
        />
        <StatCard
          icon={Heart}
          title="Heart Rate"
          value="78 bpm"
          status="Lower than Average"
          bg="bg-pink-50"
        />
      </div>

      {/* Diagnostic List (UNCHANGED STRUCTURE) */}
      {/* Diagnostic List */}
<div className="bg-white border rounded-2xl mt-6 p-4">
  <h3 className="text-sm font-semibold mb-3">
    Diagnostic List
  </h3>

  {/* Header (NO white background) */}
  <div
    className="
      grid grid-cols-[2fr_3fr_1fr] 
      px-3 py-2  bg-gray-50 border rounded-xl
      text-sm font-semibold text-gray-700
      mb-3
    "
  >
    <span>Problem/Diagnosis</span>
    <span>Description</span>
    <span>Status</span>
  </div>

  {/* Rows (white cards) */}
  <div className="max-h-[180px] overflow-y-auto pr-2 custom-scrollbar space-y-2">
    {diagnostics.map((item) => (
      <div
        key={item.id}
        className="
          grid grid-cols-[2fr_3fr_1fr] items-center
          bg-white border rounded-xl
          px-3 py-2 text-sm
        "
      >
        <span className="font-medium text-gray-800">
          {item.problem}
        </span>
        <span className="text-gray-500">
          {item.description}
        </span>
        <span className="text-gray-700">
          {item.status}
        </span>
      </div>
    ))}
  </div>
</div>


    </section>
  );
}

/* ---------- Stat Card (HEIGHT FIXED, STRUCTURE KEPT) ---------- */
function StatCard({ icon, title, value, status, bg }) {
  return (
    <div
      className={`
        ${bg}
        rounded-2xl
        p-6
        min-h-[200px]
        flex flex-col justify-between
      `}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
        <img src={icon} className="w-10 h-10" />
      </div>

      {/* Text */}
      <div>
        <p className="text-sm text-gray-600 mb-1">
          {title}
        </p>

        <p className="text-2xl font-semibold text-gray-900">
          {value}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          {status}
        </p>
      </div>
    </div>
  );
}

