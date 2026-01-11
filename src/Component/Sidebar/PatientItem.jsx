import { MoreHorizontal } from "lucide-react";

export default function PatientItem({
  name,
  gender,
  age,
  image,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-between p-3 rounded-xl cursor-pointer
        ${active ? "bg-teal-50" : "hover:bg-gray-100"}
      `}
    >
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-semibold text-gray-800">
            {name}
          </p>
          <p className="text-xs text-gray-500">
            {gender}, {age}
          </p>
        </div>
      </div>

      <MoreHorizontal className="w-4 h-4 text-gray-400" />
    </div>
  );
}
