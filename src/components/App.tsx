import { FormEvent, useState } from 'react'
import AddForm from './AddForm'
import ToDoList from './TodoList'

export interface listItem {
  text: string
  completed: boolean
}
function App() {
  const [list, setList] = useState<listItem[]>([])

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = (e.target as HTMLFormElement).elements[0] as HTMLInputElement
    setList([...list, { text: text.value, completed: false }])
    text.value = ''
  }

  return (
    <div className="mx-auto block w-96 py-24">
      <h1 className="font-bold text-7xl mb-8">ToDo List </h1>
      <AddForm onSubmit={onFormSubmit} />
      <ToDoList list={list} setList={setList} />
    </div>
  )
}

export default App
