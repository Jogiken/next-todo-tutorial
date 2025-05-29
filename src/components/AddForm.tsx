"use client"

import { Button, Field, Input, Stack, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { forwardRef } from "react"
import { redirect } from "next/navigation";
import { addTodo } from "@/app/actions";

interface FormValues {
  title: string,
  detail: string,
  dueDate: string
}

// interface FormValues {
//     username: string,
//     bio: string
// }

async function onSubmit(data: FormValues) {
    console.log(data);
    await addTodo(data.title, data.detail, data.dueDate);
    redirect("/");
}

export function AddForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.title}>
          <Field.Label>Username</Field.Label>
          <Input
            placeholder="Todoタイトル"
            {...register("title", { required: "タイトルは必須です" })}
          />
          <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.detail}>
          <Field.Label>Profile bio</Field.Label>
          <Textarea
            rows={3}
            placeholder="Todo詳細を入力"
            {...register("detail", { required: "詳細は必須です" })}
          />
          <Field.ErrorText>{errors.detail?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.dueDate}>
            <Field.Label>期限</Field.Label>
            <Input
              placeholder="2025/01/01"
              {...register("dueDate", { required: "期限は必須です" })}
            />
            <Field.ErrorText>{errors.dueDate?.message}</Field.ErrorText>
        </Field.Root>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
    )
}