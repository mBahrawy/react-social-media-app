import Container from './Loader.style'
import Spinner from '@/assets/images/Spinner.svg'

type LoaderProps = {
  id?: string
}

function Loader({ id = '' }: LoaderProps): JSX.Element {
  return (
    <Container id={id}>
      <img src={Spinner} alt='' />
    </Container>
  )
}

export default Loader
