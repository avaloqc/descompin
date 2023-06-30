import { Card } from '../components/Card'
import { useAppContext } from '../storage/AppContext'

export const CardContainer = (props) => {
  const { state, dispatch } = useAppContext();
  const handleClick = () => {
    console.log('Clicou')
    dispatch({
      type: 'open modal save pin'
    })
  }

  return (<Card {...props} onClick={handleClick} />)
}