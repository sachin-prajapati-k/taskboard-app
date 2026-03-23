import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { SubmitButton } from "./components/SubmitButton";

export default function Home() {
  async function addTask(formData: FormData) {
    "use server";
    const Task = formData.get("task")?.toString();

    if (!Task || Task.trim() === "") return;
    await prisma.task.create({
      data: {
        title: Task,
      },
    });
    console.log(Task);
  }

  return (
    <div className="">
      <div>
        <form action={addTask}>
          <label>Add your Task</label>
          <input type="text" placeholder="enter your task" name="task" />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
