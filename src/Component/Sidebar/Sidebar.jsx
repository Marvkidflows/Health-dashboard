 import { Search } from "lucide-react";
import PatientItem from "./PatientItem";
    import Emily from "../../assets/Layer 8.png"
    import Ryan from "../../assets/Layer 1.png"
    import Brandon from "../../assets/Layer 3.png"
    import Jessica from "../../assets/Layer 2.png"
    import Samantha from "../../assets/Layer 6.png"
    import Ashley from "../../assets/Layer 12.png"
    import Nathan from "../../assets/Layer 7.png"
    import Mike from "../../assets/pexels.png"
    import Olivia from"../../assets/Layer 10.png"
    import Tyler from"../../assets/Layer 9.png"
    import Kevin from"../../assets/Layer 4.png"
   import Dylan from"../../assets/Layer 5.png"
const patients = [
  { id: 1, name: "Emily Williams", gender: "Female", age: 18, image: Emily },
  { id: 2, name: "Ryan Johnson", gender: "Male", age: 45, image: Ryan },
  { id: 3, name: "Brandon Mitchell", gender: "Male", age: 36, image: Brandon },
  { id: 4, name: "Jessica Taylor", gender: "Female", age: 28, image: Jessica },
  { id: 5, name: "Samantha Johnson", gender: "Female", age: 56, image: Samantha },
  { id: 6, name: "Ashley Martinez", gender: "Female", age: 54, image: Ashley },
  { id: 7, name: "Olivia Brown", gender: "Female", age: 40, image: Olivia },
  { id: 8, name: "Tyler Davis", gender: "Male", age: 40, image: Tyler },
  { id: 9, name: "Kevin Anderson", gender: "Male", age: 40, image: Kevin },
  { id: 10, name: "Dylan Thompson", gender: "Male", age: 40, image: Dylan },
  { id: 11, name: "Nathan Evans", gender: "Male", age: 40 ,image:Nathan },
  { id: 12, name: "Mike Nolan", gender: "Male", age: 40 ,image:Mike},
];

export default function Sidebar() {
  return (
    <aside className="bg-white border rounded-2xl p-4 w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Patients
        </h2>
        <Search className="w-4 h-4 text-gray-500 cursor-pointer" />
      </div>

      {/* Scrollable patient list */}
      <div className="h-[520px] overflow-y-auto pr-2 custom-scrollbar">
        {patients.map((patient) => (
          <PatientItem
            key={patient.id}
            {...patient}
            active={patient.name === "Jessica Taylor"}
          />
        ))}
      </div>

    </aside>
  );
}
