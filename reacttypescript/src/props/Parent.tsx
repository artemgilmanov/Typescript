import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.info('Clicked')}>
      someText
    </ChildAsFC>
  )
}

export default Parent
