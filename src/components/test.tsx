import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ToDoItem from './ToDoItem/ToDoItem'

test('renders the ToDoItem component', () => {
  const mockList = [
    { text: 'Task 1', completed: false },
    { text: 'Task 2', completed: true }
  ]

  const mockSetList = (updatedList: any) => updatedList

  const { getByText, getByLabelText } = render(
    <ToDoItem list={mockList} setList={mockSetList} el={mockList[0]} />
  )

  expect(getByText('Task 1')).toBeInTheDocument()

  const checkbox = getByLabelText('Done')
  expect(checkbox).toBeInTheDocument()
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)

  const deleteButton = getByText('Delete')
  expect(deleteButton).toBeInTheDocument()

  fireEvent.click(deleteButton)
})
