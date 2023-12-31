import { Card } from '../components/Card'
import { useAppContext } from '../storage/AppContext'
import { openModalSavepinAction } from '../storage/actions';

export const CardContainer = (props) => {
  const { dispatch } = useAppContext();
  const handleClick = (pinId) => {
    dispatch(openModalSavepinAction(pinId))
  }
  return (<Card {...props} onClick={handleClick} />)
}