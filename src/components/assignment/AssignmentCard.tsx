import type { Assignment } from "@/types";
import { Calendar, FileText } from "lucide-react";


interface AssignmentCardProps {
  assignment: Assignment;
  HandleDelete: (id: string)=>void
}

export default function AssignmentCard({assignment, HandleDelete}: AssignmentCardProps) {

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-4">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <FileText className="w-5 h-5 text-indigo-500" />
        {assignment.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm">{assignment.description}</p>

      {/* Due Date */}
      <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
        <Calendar className="w-4 h-4 text-indigo-400" />
        <span>
          Due:{" "}
          <span className="font-medium text-gray-800">
            {new Date(assignment.dueDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 pt-2">
        <button className="px-4 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50">
          Edit
        </button>
        <button onClick={()=>HandleDelete(assignment._id)} className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
