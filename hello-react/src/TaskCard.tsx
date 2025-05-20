import "./TaskCard.css"


interface TaskCardProps {
  title: string;
  dueDate: string;
  assigneeName: string;
  status: "pending" | "done";
}

const TaskCard: React.FC<TaskCardProps> = ({title, dueDate, assigneeName,status}) => {

  const label = status === "done" ? "Completed on" : "Due on";
  return (
    <div className="TaskItem">
      <h2 className="font-bold">{title}</h2>
      <p>{label}: {dueDate}</p>
      <p>Assignee: {assigneeName}</p>
    </div>
  )
}

export default TaskCard