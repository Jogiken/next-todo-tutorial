# バックエンドの API サーバー

from flask import Flask, request, jsonify
import uuid

app = Flask(__name__)

todos = {

}

@app.route("/todos/<int:user>", methods=["GET"])
def get_todos(user):
    if user not in todos:
        todos[user] = []
    return jsonify({"todos": todos[user]})

@app.route("/todos/<int:user>", methods=["POST"])
def create_todo(user):
    data = request.get_json()
    title = data["title"]
    detail = data["detail"]
    dueDate = data["dueDate"]
    id_ = str(uuid.uuid4())
    if user not in todos:
        todos[user] = []
    todos[user].append({
        "id": id_,
        "title": title,
        "detail": detail,
        "dueDate": dueDate
    })
    return jsonify({"todos": todos[user]})

@app.route("/todos/<int:user>/<string:id>", methods=["DELETE"])
def delete_todo(user, id):
    if user not in todos:
        todos[user] = []
    todos[user] = [todo for todo in todos[user] if todo["id"] != id]
    return jsonify({"todos": todos[user]})

if __name__ == "__main__":
    app.run(debug=True)