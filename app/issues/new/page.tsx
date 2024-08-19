"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
interface IssueForm {
  title: string;
  description: string;
}





function NewIssuePage() {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router  = useRouter()
 const onSubmit = async (data: IssueForm) => {
  router.push('/issues')
  await axios.post("/api/issues", data);
 
};
  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root
        placeholder="Title"
        {...register("title")}
      ></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      ></Controller>

      <Button type="submit">Submit New Issue</Button>
    </form>
  );
}

export default NewIssuePage;
