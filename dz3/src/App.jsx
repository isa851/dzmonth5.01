

import Users from "./Users.jsx";


const App = () => {

    const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      phone: "1-770-736-8031 x56442",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      phone: "010-692-6593 x09125",
    },
  ];
  return (
    <div>
      {
        users.map(user => {
          return (
            <Users key={user.id} user={user} />
            
          )
        })
      }
    </div>
  )
}

export default App
