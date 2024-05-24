const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.info(event)
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.info(event)
  }
  return (
    <div>
      <input onChange={onChange}></input>
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  )
}

export default EventComponent
