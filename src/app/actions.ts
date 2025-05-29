"use server";

export async function addTodo(title: string, detail: string, dueDate: string) {
    // TODO: データベースに保存する処理を実装
    const response = await fetch("http://localhost:5000/todos/241205062", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ title, detail, dueDate }),
    });
    console.log("タスクを追加:", { title, detail, dueDate });
    console.log(response);
}

export async function deleteTodo(id: number) {
    // TODO: データベースから削除する処理を実装
    console.log("タスクを削除:", id);
    const response = await fetch(`http://localhost:5000/todos/241205062/${id}`, {
        method: "DELETE",
    });
    console.log(response);
}


export async function getTodos() {
    const response = await fetch("http://localhost:5000/todos/241205062");
    const data = await response.json();
    return data.todos;
}