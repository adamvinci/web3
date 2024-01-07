const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      {friends.map((friend) => {
        return (
          <div>
            <p>{friend.age}</p>
            <p>{friend.name}</p>
          </div>
        )
      })}

    </div>
  )
}

export default App