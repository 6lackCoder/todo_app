import Todo from './Todo'

const Todos = ({ todos }) => {
  

  return (
    <div className=' ring-1 ring-blue-800 p-4  mt-4'>
       {
        todos.map((item)=>
            <Todo todo={item.item} key={item.id} />
        )
       }
    </div>
  )
}

export default Todos