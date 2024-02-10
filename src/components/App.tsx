import { FormEvent, useState } from 'react'
import AddForm from './AddForm/AddForm'
import ToDoList from './ToDoList/TodoList'

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
      <h1 className="mb-8 text-7xl font-bold">ToDo List </h1>
      <AddForm onSubmit={onFormSubmit} />
      <ToDoList list={list} setList={setList} />
    </div>
  )
}

export default App
