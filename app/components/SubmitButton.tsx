"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-600 text-white py-2 px-5 rounded-lg "
      disabled={pending}
    >
      {pending ? "Adding..." : "Add Task"}
    </button>
  );
}
