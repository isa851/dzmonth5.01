import axios from "axios"
import { useState } from "react"

export default function Form({ fetchTodo }) {
    const [task, setTask] = useState('')

    const addTask = () => {
        axios.post('http://localhost:5000/todos', { 
            task: task.trim(), 
            status: false 
        })
        .then(() => {
            setTask('')
            fetchTodo()
        })
        .catch(e => console.log(e))
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
            gap: '10px'
        }}>
            <input
                type="text"
                value={task}
                placeholder="Введите задачу..."
                style={{ 
                    width: '70%',
                    padding: '10px',
                    fontSize: '16px'
                }}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
            />

            <button
                onClick={addTask}
                disabled={task.trim() === ""}
                style={{
                    padding: '10px 20px'
                }}
            >
                Add task
            </button>
        </div>
    )
}