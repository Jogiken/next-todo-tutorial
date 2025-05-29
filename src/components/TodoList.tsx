"use client";
import { Box, Button, CloseButton, Link, useDisclosure } from "@chakra-ui/react";
import { Dialog, DialogBackdrop, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogPositioner, DialogTitle, DialogTrigger, Portal } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import { useState } from "react";
import { deleteTodo } from "@/app/actions";
type Todo = {
    id: number;
    title: string;
    detail: string;
    dueDate: string;
}

export function TodoList(props: { todos: Todo[] }) {
    const [open, setOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const [todos, setTodos] = useState<Todo[]>(props.todos);

    const handleOpenChange = (details: { open: boolean }) => {
        setOpen(details.open);
        console.log(open);
    };

    return (
        <>
            <Table.Root variant="outline" borderWidth="1px" borderRadius="lg" p={4} fontSize="lg" interactive>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader fontSize="lg" padding={2} width="75%">タスク</Table.ColumnHeader>
                        <Table.ColumnHeader fontSize="lg" padding={2} width="25%">期限</Table.ColumnHeader>
                        <Table.ColumnHeader fontSize="lg" padding={2} width="1%" wordBreak="keep-all">削除</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {todos.map((todo) => (
                        <Table.Row key={todo.id} onClick={() => {
                            setOpen(true);
                            setSelectedTodo(todo);
                        }}>
                            <Table.Cell fontSize="lg" padding={2}>{todo.title}</Table.Cell>
                            <Table.Cell fontSize="lg" padding={2}>{todo.dueDate}</Table.Cell>
                            <Table.Cell fontSize="lg" padding={2} wordBreak="keep-all" color="red.500"><Link onClick={(e) => {
                                e.stopPropagation();
                                deleteTodo(todo.id);
                                setTodos(todos.filter((t) => t.id !== todo.id));
                            }}>削除</Link></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
            <Dialog.Root open={open} onOpenChange={handleOpenChange} size="lg" placement="center">
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title fontSize="lg" padding={3}>詳細</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <Dialog.Description padding={3}>
                                    {selectedTodo?.detail}
                                </Dialog.Description>
                            </Dialog.Body>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </>
    );
}