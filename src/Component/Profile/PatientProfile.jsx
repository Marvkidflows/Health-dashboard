import PhoneIcon from "../../assets/phoneIcon@2x.png"
import Calendar from "../../assets/calendar.svg"
import JessicaImage from "../../assets/Layer 2@2x.png"
import BirthIcon from "../../assets/BirthIcon.png"
import FemaleIcon from "../../assets/femaleIcon@2x.png"
import Insurance from "../../assets/InsuranceIcon@2x.png"
import DownloadIcon from "../../assets/download@2x.png"
export default function PatientProfile() {
  const labResults = [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "X-Rays",
    "Urine Test",
  ];

  return (
    <aside className="space-y-6">

      {/* ===== PROFILE CARD ===== */}
      <div className="bg-white border rounded-2xl p-6 text-center">
        {/* Avatar */}
        <img
          src={JessicaImage}
          alt="Jessica Taylor"
          className="w-28 h-28 rounded-full mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold text-gray-800">
          Jessica Taylor
        </h3>

        {/* Info list */}
        <div className="mt-6 space-y-4 text-left">
          <InfoRow icon={Calendar} label="Date Of Birth" value="August 23, 1996" />
          <InfoRow icon={FemaleIcon} label="Gender" value="Female" />
          <InfoRow icon={PhoneIcon} label="Contact Info." value="(415) 555-1234" />
          <InfoRow icon={PhoneIcon} label="Emergency Contacts" value="(415) 555-5678" />
          <InfoRow icon={Insurance} label="Insurance Provider" value="Sunrise Health Assurance" />
        </div>

        {/* Button */}
        <button className="mt-6 w-full bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-full text-sm font-medium">
          Show All Information
        </button>
      </div>

      {/* ===== LAB RESULTS ===== */}
      <div className="bg-white border rounded-2xl p-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-4">
          Lab Results
        </h3>

        <div className="space-y-3 max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
          {labResults.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <span className="text-sm text-gray-700">{item}</span>
              <img src={DownloadIcon} className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}

/* ===== SMALL REUSABLE ROW ===== */
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={icon}
          alt=""
          className="w-4 h-4 object-contain scale-150"
        />
      </div>

      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}


