import Image from "next/image";

export default function Home() {
  async function addTask(formData: FormData) {
    "use server";
    const Task = formData.get("task")?.toString();
    console.log(Task);
  }
  return (
    <div className="">
      <div>
        <form action={addTask}>
          <label>Add your Task</label>
          <input type="text" placeholder="enter your task" name="task" />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
}
