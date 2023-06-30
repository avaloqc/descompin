import { Card } from '../components/Card'
import { useAppContext } from '../storage/AppContext'
import { openModalSavepinAction } from '../storage/actions';

export const CardContainer = (props) => {
  const { state, dispatch } = useAppContext();
  const handleClick = () => {
    console.log('Clicou')
    dispatch(openModalSavepinAction())
  }
  return (<Card {...props} onClick={handleClick} />)
}