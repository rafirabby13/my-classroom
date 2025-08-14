import type { Assignment } from "@/types";
import { Calendar, FileText, Trash2 } from "lucide-react";

interface AssignmentCardProps {
  assignment: Assignment;
  HandleDelete: (id: string) => void;
}

export default function AssignmentCard({ assignment, HandleDelete }: AssignmentCardProps) {
  return (
    <div className="w-full  mx-auto bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-500" />
          <h2 className="text-lg font-semibold text-gray-900">
            {assignment.title}
          </h2>
        </div>
        <button
          onClick={() => HandleDelete(assignment._id)}
          className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          title="Delete Assignment"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {assignment.description}
        </p>

        {/* Due Date */}
        <div className="flex items-center gap-2 text-sm bg-indigo-50 text-indigo-700 px-3 py-2 rounded-lg">
          <Calendar className="w-4 h-4" />
          <span>
            <span className="font-medium">Due:</span>{" "}
            {new Date(assignment.dueDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
