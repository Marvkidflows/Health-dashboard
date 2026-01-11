import Navbar from "../Component/Navbar.jsx"
import Sidebar from "../Component/Sidebar/Sidebar"
import DiagnosisHistory from "../component/Diagnosis/DiagnosisHistory"
import PatientProfile from "../Component/Profile/PatientProfile.jsx"
export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 mt-6">
        <div className="grid grid-cols-[300px_1fr_320px] gap-6">

          {/* Sidebar */}
          <Sidebar />

          {/* Main Center Panel */}
           <DiagnosisHistory /> 

          {/* Right Profile */}
           <PatientProfile /> 

        </div>
      </main>
    </>
  );
}
