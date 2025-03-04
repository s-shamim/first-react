import ListGroup from "./components/ListGroup.tsx";

function App() {
  let items = ["New York", "San Francisco", "Tokio", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} /></div>
}

export default App