import { Dispatch } from 'react'
import { listItem } from './App'

interface ToDoItemProps {
  list: listItem[]
  setList: Dispatch<React.SetStateAction<listItem[]>>
  el: listItem
}
const ToDoItem = (props: ToDoItemProps) => {
  const { list, setList, el } = props

  const onInputChange = (index: number) => {
    const newArray = list.map((el) =>
      list.indexOf(el) === index ? { ...el, completed: !el.completed } : el
    )
    setList(newArray)
  }

  const handleDelete = (index: number) => {
    setList(list.filter((el) => list.indexOf(el) !== index))
  }

  return (
    <li className="w-full flex justify-between items-center p-2 border border-yellow rounded-md ">
      <p className="w-40">{el.text}</p>
      <label>
        Done
        <input
          type="checkbox"
          checked={el.completed}
          onChange={() => onInputChange(list.indexOf(el))}
        />
      </label>

      <button
        onClick={() => handleDelete(list.indexOf(el))}
        className="h-8 w-24 border rounded-md  border-yellow hover:border-green bg-yellow hover:bg-red text-md font-semibold hover:text-yellow"
      >
        Delete
      </button>
    </li>
  )
}

export default ToDoItem
