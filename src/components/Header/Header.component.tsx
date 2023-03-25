import { useState } from 'react'
import PopupModal from '../PopupModal/PopupModal.component'
import Container from './Header.style'

type HeaderProps = {}

function Header(props: HeaderProps): JSX.Element {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false)
  const handleToggleModal = () => {
    setIsActiveModal((prev) => !prev);
  }

  return (
    <Container>
      {isActiveModal && <PopupModal setIsActiveModal={setIsActiveModal} />}
      <nav className='navbar navbar-expand-lg navbar-light bg-light px-5 justify-content-between border-bottom'>
        <a className='navbar-brand' href='#'>
          Logo
        </a>

        <b>Social Media App</b>

        <button className='btn btn-primary' onClick={handleToggleModal}>Add post</button>
      </nav>
    </Container>
  )
}

export default Header
