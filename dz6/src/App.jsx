import { useEffect, useState } from 'react'
import FormUser from './components/FormUser';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  
  const getUser = () => {
    fetch('http://localhost:8000/user')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((e) => console.log(e));
  }

  useEffect(() => {
    getUser();
  }, [])
  return (
    <div>
      <FormUser getUser={getUser} />
      {
        data?.map((user, indx) => (
          <div key={indx}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App