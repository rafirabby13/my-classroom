import { useGetAllAssignments } from "@/hooks/useGetAllAssignments"
import AssignmentCard from "./AssignmentCard"
import type { Assignment, ClassData } from "@/types"
import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { Loader } from "lucide-react"
interface ClassworkTabProps {
    classData: ClassData;
}
const AllAssingments = ({ classData }: ClassworkTabProps) => {
    // console.log(classData)
    const classId = classData._id as string
    const { data, isPending } = useGetAllAssignments(classId)
    if (isPending) {
        return <Loader color="#990000" />
    }
    const [assignments, setAssignments] = useState(data || [])
    // console.log(data)

    const HandleDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                const selectedAssignment = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/delete-assignments/${id}`)
                if (selectedAssignment) {

                    setAssignments((prev: any[]) => prev.filter(a => a._id !== id));
                }
            }
        });



    }
    return (
        <div className="grid grid-cols-3 gap-4 ">
            {
                assignments?.map((assingment: Assignment, i: number) => <AssignmentCard key={i} assignment={assingment} HandleDelete={HandleDelete}></AssignmentCard>)
            }

        </div>
    )
}

export default AllAssingments
