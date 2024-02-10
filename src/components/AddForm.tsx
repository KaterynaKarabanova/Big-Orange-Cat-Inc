interface AddFormProps {
  onSubmit: (e: any) => void
}

const AddForm = (props: AddFormProps) => {
  const { onSubmit } = props

  return (
    <form onSubmit={onSubmit} className="w-full flex justify-between">
      <label className="h-12 w-64">
        <input
          type="text"
          name="text"
          className="h-full w-full border rounded-md  border-yellow focus:border-green focus:outline-none px-4"
          required
        />
      </label>
      <button
        type="submit"
        className="h-12 w-24 border rounded-md  border-yellow hover:border-green bg-yellow hover:bg-green text-lg font-semibold hover:text-yellow"
      >
        Add
      </button>
    </form>
  )
}
export default AddForm
