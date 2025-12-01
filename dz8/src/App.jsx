import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Form from './components/Form'

function App() {
  const [todos, setTodos] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')

  const fetchTodo = () => {
    axios.get('http://localhost:5000/todos')
      .then(({ data }) => setTodos(data))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    fetchTodo()
  }, [])

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(() => fetchTodo())
      .catch(e => console.log(e))
  }

  const startEdit = (id, currentTask) => {
    setEditingId(id)
    setEditValue(currentTask)
  }

  const saveEdit = () => {
    if (editValue.trim()) {
      axios.patch(`http://localhost:5000/todos/${editingId}`, { task: editValue })
        .then(() => {
          fetchTodo()
          setEditingId(null)
          setEditValue('')
        })
        .catch(e => console.log(e))
    }
  }

  const toggleComplete = (id, currentStatus) => {
    axios.patch(`http://localhost:5000/todos/${id}`, { status: !currentStatus })
      .then(() => fetchTodo())
      .catch(e => console.log(e))
  }

  return (
    <div>
      <section style={{ width: '800px', backgroundColor: '#333333', padding: '15px 25px', color: 'white' }}>
        <h2>Todo list</h2>
        <Form fetchTodo={fetchTodo} />

        {todos?.map(todo => (
          <div
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #555'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
              <input
                type="checkbox"
                checked={todo.status || false}
                onChange={() => toggleComplete(todo.id, todo.status)}
              />

              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  autoFocus
                  style={{ padding: '8px', fontSize: '18px', flex: 1, background: '#555', border: 'none', color: 'white' }}
                  onKeyDown={e => e.key === 'Enter' && saveEdit()}
                />
              ) : (
                <h2
                  style={{
                    margin: 0,
                    textDecoration: todo.status ? 'line-through' : 'none',
                    opacity: todo.status ? 0.6 : 1
                  }}
                >
                  {todo.task}
                </h2>
              )}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {editingId === todo.id ? (
                <>
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => { setEditingId(null); setEditValue('') }}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => startEdit(todo.id, todo.task)}>Edit</button>
                  <button onClick={() => deleteTask(todo.id)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App