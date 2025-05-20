import "./TaskCard.css"

const TaskCard = (props) => {
    const label = props.status === "done" ? "Completed on" : "Due on";
  return (
    <div className="TaskItem">
      <h2 className="font-bold">{props.title}</h2>
      <p>{label}: {props.dueDate}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard