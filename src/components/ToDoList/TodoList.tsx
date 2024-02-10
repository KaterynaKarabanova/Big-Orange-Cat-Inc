import { listItem } from 'components/App'
import { Dispatch } from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'

interface ToDoListProps {
  list: listItem[]
  setList: Dispatch<React.SetStateAction<listItem[]>>
}

const ToDoList = (props: ToDoListProps) => {
  const { list, setList } = props

  return (
    <ul className="flex flex-col gap-4 p-6">
      {list &&
        list.map((el, index) => (
          <ToDoItem key={index} el={el} list={list} setList={setList} />
        ))}
    </ul>
  )
}
export default ToDoList
